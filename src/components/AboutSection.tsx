import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Zap, User, ArrowRight, CheckCircle2 } from "lucide-react";
import azizPhoto from "@/assets/aziz-photo.jpg";
import zainaAvatar from "@/assets/zaina-avatar.svg";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const valueIcons = [Target, Zap, Users, Award];

const team = [
  { name: "Engineer Zaina", role: "Manager",         image: zainaAvatar, useIcon: false, expertise: ["Leadership","Strategy","Business Growth"] },
  { name: "Engineer Aziz",  role: "General Manager", image: azizPhoto,   useIcon: false, expertise: ["Full-Stack","AI/ML","System Architecture"] },
];

const AboutSection = () => {
  const { t, direction } = useLanguage();

  const stats = [
    { value: 100, suffix: "+", labelKey: "about.stat.projects" },
    { value: 40,  suffix: "+", labelKey: "about.stat.clients" },
    { value: 15,  suffix: "+", labelKey: "about.stat.countries" },
    { value: 98,  suffix: "%", labelKey: "about.stat.satisfaction" },
  ];

  const timeline = [0, 1, 2, 3, 4, 5].map((i) => ({
    year: ["2020","2021","2022","2023","2024","2025"][i],
    titleKey: `about.timeline.${i}.title`,
    descKey:  `about.timeline.${i}.desc`,
  }));

  const values = [0, 1, 2, 3].map((i) => ({
    icon: valueIcons[i],
    titleKey: `about.values.${i}.title`,
    descKey:  `about.values.${i}.desc`,
  }));

  const storyBullets = ["about.story.b1","about.story.b2","about.story.b3","about.story.b4"];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            🏢 {t("about.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("about.heading.pre")} <span className="gradient-text">Azain Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* ── Animated Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-20 reveal">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 md:p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-2xl md:text-4xl font-extrabold gradient-text mb-1 md:mb-2">
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm leading-snug">{t(s.labelKey)}</p>
            </div>
          ))}
        </div>

        {/* ── Story + Timeline ── */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Story text */}
            <div className="reveal">
              <h3 className="text-2xl font-bold text-foreground mb-5">{t("about.story.heading")}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.story.p1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about.story.p2")}</p>
              <ul className="space-y-2 mb-8">
                {storyBullets.map((key, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="press-effect btn-arrow" asChild>
                <a href="/about">
                  {t("about.story.btn")} <ArrowRight data-arrow className={`h-4 w-4 ${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                </a>
              </Button>
            </div>

            {/* Timeline */}
            <div className="reveal" style={{ animationDelay: "150ms" }}>
              <div className="space-y-2">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center flex-shrink-0 w-9">
                      <div className="w-9 h-9 rounded-full primary-gradient flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10">
                        <span className="text-white text-[11px] font-bold leading-none">{item.year.slice(2)}</span>
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-primary/50 to-primary/10 min-h-[1.5rem]" />
                      )}
                    </div>
                    <div className="pb-5 pt-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex-shrink-0">
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug">
                          {t(item.titleKey)}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{t(item.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Core Values ── */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 reveal">
            {t("about.values.heading")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center group widget-interactive reveal border-border/60 shadow-sm hover:shadow-lg"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{t(value.titleKey)}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(value.descKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ── Team ── */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 reveal">
            {t("about.team.heading")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group widget-interactive reveal border-border/60 shadow-md hover:shadow-xl overflow-hidden"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-1 primary-gradient w-full" />
                <CardContent className="p-7 text-center">
                  <div className="relative mb-5 inline-block">
                    {member.useIcon ? (
                      <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center primary-gradient shadow-lg">
                        <User className="w-12 h-12 text-white" />
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                      />
                    )}
                    <span className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 pointer-events-none" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center reveal">
          <Button variant="hero" size="lg" className="press-effect btn-arrow" asChild>
            <a href="/contact">
              {t("about.cta")} <ArrowRight data-arrow className={`h-4 w-4 ${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
