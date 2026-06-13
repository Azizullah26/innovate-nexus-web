DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contact_submissions;
REVOKE SELECT ON public.contact_submissions FROM authenticated;
REVOKE SELECT ON public.contact_submissions FROM anon;