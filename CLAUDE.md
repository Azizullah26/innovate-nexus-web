# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on localhost:8080
npm run build        # Production build
npm run build:dev    # Development mode build
npm run lint         # ESLint (TypeScript/JavaScript)
npm run preview      # Preview production build locally
```

There is no test runner configured in this project.

## Supabase CLI (Edge Functions)

```bash
supabase functions serve contact-form   # Run edge function locally
supabase db push                        # Apply migrations
supabase gen types typescript --local   # Regenerate DB types
```

## Architecture

**Stack**: Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui  
**Backend**: Supabase (PostgreSQL + Edge Functions via Deno)  
**Routing**: React Router v6 — routes defined in [src/App.tsx](src/App.tsx)

### Provider hierarchy (top-down in `App.tsx`)
1. `LanguageProvider` — i18n context (EN/AR with RTL support, localStorage-persisted)
2. `QueryClientProvider` — TanStack React Query for server state
3. `TooltipProvider` — Radix UI tooltips
4. `BrowserRouter`
5. Toast providers (shadcn + Sonner)

### Directory layout
- `src/pages/` — Route-level page components (Home, About, Services, Portfolio, Blog, Contact, NotFound)
- `src/components/` — Feature section components (Hero, Navigation, ServicesSection, etc.)
- `src/components/ui/` — 53 shadcn/ui components (do not hand-edit; regenerate with `shadcn` CLI)
- `src/contexts/` — `LanguageContext` for EN/AR translations and RTL direction
- `src/hooks/` — `useScrollReveal` (Intersection Observer animations), `use-toast`, `use-mobile`
- `src/integrations/supabase/` — Supabase client and generated TypeScript types
- `supabase/functions/contact-form/` — Deno edge function for the contact form
- `supabase/migrations/` — SQL migrations (contact_submissions table with RLS)

### Multilingual / RTL
All user-facing strings must go through `LanguageContext`. The context provides a `t()` function and toggles `document.documentElement.dir` and a `.rtl` CSS class automatically. Translation keys live inside `LanguageContext.tsx` — add both `en` and `ar` entries together.

### Styling conventions
- Tailwind utility classes are the default. Custom CSS variables live in [src/index.css](src/index.css).
- Brand colors: **Primary orange** `hsl(21 100% 50%)` · **Secondary teal** `hsl(176 60% 55%)`
- Dark mode uses the `class` strategy (`dark` class on `<html>`).
- Use `cn()` from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) to compose class names.

### Supabase / Backend
- Client is initialized once in `src/integrations/supabase/client.ts` using `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- The contact form edge function (`supabase/functions/contact-form/`) validates input, applies rate-limiting (5 req/IP/min), inserts into `contact_submissions`, and optionally emails `NOTIFICATION_EMAIL`.
- RLS policies: anonymous users can INSERT; authenticated users can SELECT.

### Path alias
`@/` maps to `./src/` — use it for all internal imports.

## Environment Variables

| Variable | Where used |
|---|---|
| `VITE_SUPABASE_URL` | Supabase client |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase client |
| `VITE_SUPABASE_FUNCTION_URL` | Contact form fetch call |
| `SUPABASE_URL` | Edge function (server-side) |
| `SUPABASE_SERVICE_ROLE_KEY` | Edge function (server-side) |
| `NOTIFICATION_EMAIL` | Edge function (optional email alerts) |

## Key Constraints
- `strictNullChecks` is **off** in tsconfig — avoid enabling it without a full audit.
- ESLint has unused-vars/params rules **disabled** — do not rely on linting to catch dead code.
- This project was scaffolded by [Lovable](https://lovable.dev/projects/324fac23-4811-496b-b028-53833bfe4b5d); Lovable may auto-commit on its own — coordinate if working in parallel.
