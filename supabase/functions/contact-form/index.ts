import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || entry.reset < now) {
    ipHits.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_PROJECT = new Set(['', 'web', 'mobile', 'ai', 'odoo', 'consulting', 'other', 'web-app', 'mobile-app', 'ai-integration', 'cloud-migration']);
const ALLOWED_BUDGET = new Set(['', '<5k', '5k-15k', '15k-50k', '50k-100k', '100k+']);

function isStr(v: unknown): v is string { return typeof v === 'string'; }

function validate(body: Record<string, unknown>): { ok: true; data: Record<string, string | null> } | { ok: false; error: string } {
  const name    = isStr(body.name)    ? body.name.trim()    : '';
  const email   = isStr(body.email)   ? body.email.trim()   : '';
  const message = isStr(body.message) ? body.message.trim() : '';
  const company = isStr(body.company) ? body.company.trim() : '';
  const project = isStr(body.project) ? body.project.trim() : '';
  const budget  = isStr(body.budget)  ? body.budget.trim()  : '';

  if (!name || name.length > 200)                               return { ok: false, error: 'Invalid name (1-200 chars)' };
  if (!email || email.length > 254 || !EMAIL_RE.test(email))   return { ok: false, error: 'Invalid email' };
  if (!message || message.length > 5000)                        return { ok: false, error: 'Invalid message (1-5000 chars)' };
  if (company.length > 200)                                     return { ok: false, error: 'Company too long' };
  if (!ALLOWED_PROJECT.has(project.toLowerCase()))              return { ok: false, error: 'Invalid project value' };
  if (!ALLOWED_BUDGET.has(budget.toLowerCase()))                return { ok: false, error: 'Invalid budget value' };

  return {
    ok: true,
    data: { name, email, message, company: company || null, project: project || null, budget: budget || null },
  };
}

function buildEmailHtml(data: Record<string, string | null>): string {
  const row = (label: string, value: string | null) =>
    value
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top;width:140px">${label}</td><td style="padding:8px 12px;color:#222">${value}</td></tr>`
      : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#FF6B00,#FF9A3C);padding:28px 32px">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">🚀 New Project Enquiry</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,.85);font-size:14px">Via azaintech.com contact form</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden">
              ${row('Name', data.name)}
              ${row('Email', data.email)}
              ${row('Company', data.company)}
              ${row('Project Type', data.project)}
              ${row('Budget', data.budget)}
            </table>

            <div style="margin-top:24px">
              <p style="margin:0 0 8px;font-weight:600;color:#555;font-size:14px">Project Details</p>
              <div style="background:#f9f9f9;border:1px solid #e8e8e8;border-radius:8px;padding:16px;color:#222;font-size:14px;line-height:1.6;white-space:pre-wrap">${data.message}</div>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px 28px;border-top:1px solid #f0f0f0">
            <p style="margin:0;color:#aaa;font-size:12px">Reply directly to this email to respond to ${data.name}. · Azain Tech © 2025</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

async function sendEmail(data: Record<string, string | null>, resendApiKey: string): Promise<void> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Azain Tech Contact <onboarding@resend.dev>',
      to: ['info@azaintech.com'],
      reply_to: data.email!,
      subject: `New Project Enquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: buildEmailHtml(data),
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('Resend error:', err);
    throw new Error('Email delivery failed');
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('cf-connecting-ip') ||
      'unknown';

    if (!rateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = validate(body);
    if (!result.ok) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error: dbError } = await supabase.from('contact_submissions').insert(result.data);
      if (dbError) console.error('DB insert error:', dbError);
    }

    // Send email notification
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (resendApiKey) {
      await sendEmail(result.data, resendApiKey);
      console.log(`Email sent to info@azaintech.com for submission from ${result.data.email}`);
    } else {
      console.warn('RESEND_API_KEY not set — skipping email notification');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
