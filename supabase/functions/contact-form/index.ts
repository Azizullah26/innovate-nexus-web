import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Simple in-memory rate limiter (per isolate). Limits requests per IP.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
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
const ALLOWED_PROJECT = new Set(['', 'web', 'mobile', 'ai', 'odoo', 'consulting', 'other']);
const ALLOWED_BUDGET = new Set(['', '<5k', '5k-15k', '15k-50k', '50k-100k', '100k+']);
const ALLOWED_TIMELINE = new Set(['', 'asap', '1-3-months', '3-6-months', '6-months+', 'flexible']);

function isStr(v: unknown): v is string { return typeof v === 'string'; }

function validate(body: Record<string, unknown>): { ok: true; data: Record<string, string | null> } | { ok: false; error: string } {
  const name = isStr(body.name) ? body.name.trim() : '';
  const email = isStr(body.email) ? body.email.trim() : '';
  const message = isStr(body.message) ? body.message.trim() : '';
  const company = isStr(body.company) ? body.company.trim() : '';
  const project = isStr(body.project) ? body.project.trim() : '';
  const budget = isStr(body.budget) ? body.budget.trim() : '';
  const timeline = isStr(body.timeline) ? body.timeline.trim() : '';

  if (!name || name.length > 200) return { ok: false, error: 'Invalid name (1-200 chars)' };
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return { ok: false, error: 'Invalid email' };
  if (!message || message.length > 5000) return { ok: false, error: 'Invalid message (1-5000 chars)' };
  if (company.length > 200) return { ok: false, error: 'Company too long' };
  if (!ALLOWED_PROJECT.has(project.toLowerCase())) return { ok: false, error: 'Invalid project value' };
  if (!ALLOWED_BUDGET.has(budget.toLowerCase())) return { ok: false, error: 'Invalid budget value' };
  if (!ALLOWED_TIMELINE.has(timeline.toLowerCase())) return { ok: false, error: 'Invalid timeline value' };

  return {
    ok: true,
    data: {
      name,
      email,
      message,
      company: company || null,
      project: project || null,
      budget: budget || null,
      timeline: timeline || null,
    },
  };
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

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from('contact_submissions').insert(result.data);

    if (dbError) {
      console.error('DB insert error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email notification
    const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL');
    if (notificationEmail) {
      console.log(`New contact submission received from ${result.data.email}`);
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
