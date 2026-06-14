import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSlider from "@/components/ClientsSlider";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import PricingSection from "@/components/PricingSection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import azainLogo from "@/assets/azain-tech-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Inline SVG social icons ── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

/* ── Wave divider — faces down by default ── */
const WaveDown = ({ fill }: { fill: string }) => (
  <div className="wave-divider pointer-events-none" style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
      <path d="M0,0 C360,70 1080,70 1440,0 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

/* ── Wave divider — faces up ── */
const WaveUp = ({ fill }: { fill: string }) => (
  <div className="wave-divider-top pointer-events-none" style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 70 }}>
      <path d="M0,0 C360,70 1080,70 1440,0 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

/* ── Tech ticker ── */
const techTags = [
  "React.js","Next.js","Node.js","Python","TypeScript","PostgreSQL",
  "AWS","Azure","GCP","Docker","Kubernetes","GPT-4","Claude","Gemini",
  "UAE PASS","Odoo","Shopify","React Native","TailwindCSS","FastAPI",
  "Redis","MongoDB","OpenAI","LangChain","RAG","Computer Vision",
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Services — light bg */}
        <div className="relative bg-muted/30">
          <ServicesSection />
        </div>

        {/* Wave → Portfolio (white bg) */}
        <div className="relative">
          <PortfolioSection />
        </div>

        {/* Clients slider */}
        <ClientsSlider />

        {/* AI Features — dark bg */}
        <div className="relative">
          <AIFeaturesSection />
        </div>

        {/* Pricing */}
        <PricingSection />

        {/* Reviews */}
        <ClientReviewsSection />

        {/* About */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="relative overflow-hidden bg-foreground text-background">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-bg-dark opacity-60 pointer-events-none" />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/8 blur-[80px] pointer-events-none" />

        {/* ── Tech ticker strip ── */}
        <div className="relative border-b border-white/8 py-4 overflow-hidden">
          <div className="ticker-wrap">
            <div className="ticker-track">
              {[...techTags, ...techTags].map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/12 bg-white/5 text-white/55 text-xs font-medium flex-shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main footer grid ── */}
        <div className="relative container mx-auto px-4 lg:px-8 pt-10 md:pt-16 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <img src={azainLogo} alt="Azain Tech" className="h-9 md:h-10 w-auto mb-4 md:mb-5 brightness-0 invert" />
              <p className="text-background/65 mb-5 md:mb-6 max-w-sm text-sm leading-relaxed">
                {t("footer.description")}
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { Icon: LinkedInIcon,  href: "#", label: "LinkedIn" },
                  { Icon: TwitterIcon,   href: "#", label: "Twitter/X" },
                  { Icon: GitHubIcon,    href: "#", label: "GitHub" },
                  { Icon: InstagramIcon, href: "#", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl border border-white/12 bg-white/6 flex items-center justify-center text-background/55 hover:text-background hover:bg-primary hover:border-primary transition-all duration-300 press-effect"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-background text-sm mb-5 tracking-wide uppercase">{t("footer.services")}</h4>
              <ul className="space-y-3">
                {[
                  { label: t("footer.webDev"),         href: "/services" },
                  { label: t("footer.mobileApps"),     href: "/services" },
                  { label: t("footer.aiIntegration"),  href: "/services" },
                  { label: t("footer.cloudSolutions"), href: "/services" },
                  { label: "UAE PASS Integration",     href: "/services" },
                  { label: "CRM & ERP Systems",        href: "/services" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-background/55 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-background text-sm mb-5 tracking-wide uppercase">{t("footer.company")}</h4>
              <ul className="space-y-3">
                {[
                  { label: t("footer.aboutUs"),   href: "/about" },
                  { label: t("footer.portfolio"), href: "/portfolio" },
                  { label: t("footer.blog"),      href: "/blog" },
                  { label: t("footer.contact"),   href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-background/55 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-background/45 text-xs mb-1">📍 Dubai, UAE</p>
                <p className="text-background/45 text-xs">📧 hello@azaintech.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative border-t border-white/8">
          <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-background/40 text-xs text-center sm:text-left">{t("footer.rights")}</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/40 hover:text-background/70 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/40 hover:text-background/70 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
