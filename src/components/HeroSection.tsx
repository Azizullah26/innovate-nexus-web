import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code2, Brain, Cloud, Zap, Terminal, Globe, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-background.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { EnterpriseDashboardMockup } from "@/components/EnterpriseVisuals";

const techBadges = [
  { icon: Code2,    label: "React.js",    color: "#61DAFB", top: "22%", left: "6%",   delay: "0s",   dur: "5.0s" },
  { icon: Brain,    label: "AI & ML",     color: "#FF7043", top: "18%", right: "7%",  delay: "0.6s", dur: "6.0s" },
  { icon: Terminal, label: "Node.js",     color: "#68A063", top: "46%", left: "3%",   delay: "1.1s", dur: "5.5s" },
  { icon: Cloud,    label: "Cloud",       color: "#4DB6AC", top: "42%", right: "4%",  delay: "1.7s", dur: "7.0s" },
  { icon: Cpu,      label: "Python",      color: "#FFD43B", bottom:"26%", left: "8%", delay: "0.9s", dur: "6.5s" },
  { icon: Database, label: "PostgreSQL",  color: "#336791", bottom:"22%", right: "6%",delay: "0.3s", dur: "5.8s" },
  { icon: Globe,    label: "TypeScript",  color: "#3178C6", top: "68%", left: "4%",   delay: "1.4s", dur: "6.2s" },
  { icon: Zap,      label: "Automation",  color: "#FFA000", top: "65%", right: "5%",  delay: "0.7s", dur: "5.2s" },
];

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t, direction } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/75" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* ── Animated grid overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.08) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Enterprise ambient light fields ── */}
      <div className="absolute z-[1] top-[12%] left-0 h-56 w-[44vw] bg-gradient-to-r from-primary/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute z-[1] bottom-[8%] right-0 h-64 w-[46vw] bg-gradient-to-l from-secondary/16 to-transparent blur-3xl pointer-events-none" />

      {/* ── Floating tech badges (desktop only) ── */}
      {techBadges.map((b, i) => {
        const Icon = b.icon;
        const pos: React.CSSProperties = {
          position: "absolute",
          animationDelay: b.delay,
          animationDuration: b.dur,
          ...(b.top    ? { top: b.top }       : {}),
          ...(b.bottom ? { bottom: b.bottom }  : {}),
          ...(b.left   ? { left: b.left }      : {}),
          ...(b.right  ? { right: b.right }    : {}),
        };
        return (
          /* CSS .tech-badge class is display:none by default; display:inline-flex at xl+ via media query */
          <div key={i} className="tech-badge z-[5] animate-float" style={pos}>
            <Icon style={{ color: b.color, width: 13, height: 13, flexShrink: 0 }} />
            {b.label}
          </div>
        );
      })}

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-8">
        <div className="max-w-4xl mx-auto animate-fade-in">

          {/* UAE badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{t("hero.badge")}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 text-balance px-2 leading-[1.12]">
            {t("hero.title1")}
            <span
              className="block gradient-text-animated"
              style={{ lineHeight: 1.15 }}
            >
              {t("hero.title2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/72 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            {t("hero.subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="group w-full sm:w-auto press-effect btn-arrow relative overflow-hidden"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center">
                  {t("hero.cta")}
                  <ArrowRight
                    data-arrow
                    className={`h-5 w-5 ${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"}`}
                  />
                </span>
                {/* shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full bg-white/15 skew-x-12 group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </Link>
            </Button>

            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="glass"
                  size="xl"
                  className="group w-full sm:w-auto press-effect"
                >
                  <span className={`relative flex items-center justify-center w-9 h-9 rounded-full bg-white/20 ${direction === "rtl" ? "ml-3" : "mr-3"} flex-shrink-0`}>
                    <Play className="h-4 w-4 fill-white text-white translate-x-px" />
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
                  </span>
                  {t("hero.watchDemo")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-black/95">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/FRof6IUhRQo"
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Generated enterprise dashboard visual */}
          <div className="relative mx-auto mt-8 hidden max-w-2xl lg:block">
            <div className="absolute inset-x-16 bottom-2 h-10 bg-primary/25 blur-2xl" />
            <EnterpriseDashboardMockup className="relative drop-shadow-2xl" />
          </div>

          {/* Glassmorphism stat cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 max-w-xl mx-auto mt-10 sm:mt-12 px-2">
            {[
              { value: "100+", label: t("hero.projects") },
              { value: "98%",  label: t("hero.satisfaction") },
              { value: "24/7", label: t("hero.support") },
            ].map((stat, i) => (
              <div key={i} className="stat-card group cursor-default !p-3 sm:!p-5">
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold gradient-text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/65 text-[10px] sm:text-xs leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 mt-10 text-white/35 text-[11px] tracking-widest uppercase">
            <span>Scroll</span>
            <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/55 rounded-full animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
