DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;
REVOKE INSERT ON public.contact_submissions FROM anon;
REVOKE INSERT ON public.contact_submissions FROM authenticated;