import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap, Bot, MessageSquare, MapPin, Database as DatabaseIcon,
  Shield, Code2, Brain, ArrowRight, CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PartnerLogoCloud, ServiceFlowIllustration } from "@/components/EnterpriseVisuals";

const BASE = "https://images.unsplash.com/";
const UQ = "?w=640&q=80&auto=format&fit=crop";

const accentColors = [
  { from: "hsl(21 100% 50%)",   to: "hsl(38 100% 55%)" },
  { from: "hsl(176 60% 45%)",   to: "hsl(176 60% 60%)" },
  { from: "hsl(21 100% 50%)",   to: "hsl(176 60% 55%)" },
  { from: "hsl(270 60% 55%)",   to: "hsl(21 100% 55%)" },
  { from: "hsl(200 80% 50%)",   to: "hsl(176 60% 55%)" },
  { from: "hsl(21 100% 50%)",   to: "hsl(0 80% 60%)" },
  { from: "hsl(140 60% 45%)",   to: "hsl(176 60% 55%)" },
  { from: "hsl(176 60% 45%)",   to: "hsl(270 60% 55%)" },
];

const serviceImages = [
  `${BASE}photo-1485827404703-89b55fcc595e${UQ}`, // AI Automation — robot arm
  `${BASE}photo-1677442135703-1787eea5ce01${UQ}`, // AI Agents — neural network
  `${BASE}photo-1587560699334-cc4ff634909a${UQ}`, // AI Chatbots — customer service
  `${BASE}photo-1556742031-c6961e8560b0${UQ}`,    // Google Business — storefront
  `${BASE}photo-1460925895917-afdab827c52f${UQ}`, // CRM/ERP — analytics laptop
  `${BASE}photo-1512453979798-5ea266f8880c${UQ}`, // UAE Gov — Dubai
  `${BASE}photo-1555066931-4365d14bab8c${UQ}`,    // Full-Stack — code editor
  `${BASE}photo-1551288049-bebda4e38f71${UQ}`,    // AI & Data — dashboard
];

const ServicesSection = () => {
  const { t, direction } = useLanguage();

  const services = [
    { icon: Zap,          titleKey: "services.automation.title", descKey: "services.automation.desc", features: ["services.automation.f1","services.automation.f2","services.automation.f3","services.automation.f4"] },
    { icon: Bot,          titleKey: "services.agents.title",     descKey: "services.agents.desc",     features: ["services.agents.f1","services.agents.f2","services.agents.f3","services.agents.f4"] },
    { icon: MessageSquare,titleKey: "services.chatbots.title",   descKey: "services.chatbots.desc",   features: ["services.chatbots.f1","services.chatbots.f2","services.chatbots.f3","services.chatbots.f4"] },
    { icon: MapPin,       titleKey: "services.google.title",     descKey: "services.google.desc",     features: ["services.google.f1","services.google.f2","services.google.f3","services.google.f4"] },
    { icon: DatabaseIcon, titleKey: "services.crm.title",        descKey: "services.crm.desc",        features: ["services.crm.f1","services.crm.f2","services.crm.f3","services.crm.f4"] },
    { icon: Shield,       titleKey: "services.uae.title",        descKey: "services.uae.desc",        features: ["services.uae.f1","services.uae.f2","services.uae.f3","services.uae.f4"] },
    { icon: Code2,        titleKey: "services.fullstack.title",  descKey: "services.fullstack.desc",  features: ["services.fullstack.f1","services.fullstack.f2","services.fullstack.f3","services.fullstack.f4"] },
    { icon: Brain,        titleKey: "services.data.title",       descKey: "services.data.desc",       features: ["services.data.f1","services.data.f2","services.data.f3","services.data.f4"] },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30 dot-bg opacity-60 pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("services.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.heading1")}{" "}
            <span className="gradient-text">{t("services.heading2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = accentColors[index % accentColors.length];
            const numLabel = String(index + 1).padStart(2, "0");
            const imgUrl = serviceImages[index];

            return (
              <Card
                key={index}
                className="group widget-interactive reveal relative overflow-hidden shadow-md hover:shadow-xl bg-card border-border/60"
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                {/* Top gradient accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                />

                {/* Faded number watermark */}
                <span className="service-number">{numLabel}</span>

                <CardHeader className="pb-3 pt-4">
                  {/* Real photo thumbnail */}
                  <div className="relative w-full h-[110px] rounded-xl overflow-hidden mb-4">
                    <img
                      src={imgUrl}
                      alt={t(service.titleKey)}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/10 to-transparent" />
                    <div
                      className="absolute bottom-2 left-2 right-2 h-[2px] rounded-full opacity-70"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {t(service.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs leading-relaxed mt-1">
                    {t(service.descKey)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((fk, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{t(fk)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group/btn text-xs press-effect btn-arrow border-border/60 hover:border-primary/50 hover:bg-primary/5">
                    {t("common.learnMore")}
                    <ArrowRight data-arrow className={`h-3.5 w-3.5 ${direction === "rtl" ? "mr-1.5 rotate-180" : "ml-1.5"}`} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ── Process Flow Strip ── */}
        <div className="mt-14 md:mt-20 reveal">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-6 md:p-8">
            <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none rounded-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <ServiceFlowIllustration className="mx-auto max-w-xl" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-5 md:gap-6 text-center">
                {[
                  { step: "01", titleKey: "services.flow.s1.title", descKey: "services.flow.s1.desc" },
                  { step: "02", titleKey: "services.flow.s2.title", descKey: "services.flow.s2.desc" },
                  { step: "03", titleKey: "services.flow.s3.title", descKey: "services.flow.s3.desc" },
                  { step: "04", titleKey: "services.flow.s4.title", descKey: "services.flow.s4.desc" },
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full items-center justify-center text-xs md:text-sm font-bold text-white mb-2 md:mb-3 mx-auto primary-gradient shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-foreground text-xs md:text-sm mb-0.5 md:mb-1">{t(item.titleKey)}</h4>
                    <p className="text-muted-foreground text-[11px] md:text-xs leading-relaxed">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 reveal">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground mb-5">
            {t("services.flow.label")}
          </p>
          <PartnerLogoCloud />
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12 reveal">
          <Button variant="hero" size="lg" className="press-effect btn-arrow shadow-lg" asChild>
            <a href="/services">
              {t("common.viewAll")}
              <ArrowRight data-arrow className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
