import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap, Bot, MessageSquare, MapPin, Database as DatabaseIcon,
  Shield, Code2, Brain, ArrowRight, CheckCircle2, Clock, Tag,
  Star, Users, Award, TrendingUp, Layers3, Workflow
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceFlowIllustration } from "@/components/EnterpriseVisuals";

const accentColors = [
  { from: "#FF6B35", to: "#FFA000" },
  { from: "#4DB6AC", to: "#26C6DA" },
  { from: "#FF6B35", to: "#4DB6AC" },
  { from: "#7C4DFF", to: "#FF6B35" },
  { from: "#42A5F5", to: "#4DB6AC" },
  { from: "#FF6B35", to: "#E91E63" },
  { from: "#66BB6A", to: "#4DB6AC" },
  { from: "#4DB6AC", to: "#7C4DFF" },
];

const BASE = "https://images.unsplash.com/";
const UQ = "?w=640&q=80&auto=format&fit=crop";

const services = [
  {
    icon: Zap,
    imageUrl: `${BASE}photo-1485827404703-89b55fcc595e${UQ}`,
    title: "AI Automation Solutions",
    shortDesc: "Intelligent workflows that eliminate manual tasks and scale your operations.",
    fullDesc: "Transform operations with AI-powered automation that streamlines workflows, reduces human error, and scales business processes end-to-end.",
    features: [
      "Intelligent Workflow Design",
      "Process Mining & Optimisation",
      "RPA with AI Enhancement",
      "Document Processing Automation",
      "Email & Communication Automation",
      "Real-time Monitoring Dashboards",
    ],
    pricing: "From $8,000",
    timeline: "3–8 weeks",
    technologies: ["Python", "Make.com", "n8n", "LangChain", "Zapier"],
  },
  {
    icon: Bot,
    imageUrl: `${BASE}photo-1677442135703-1787eea5ce01${UQ}`,
    title: "AI Agents Development",
    shortDesc: "Autonomous agents that reason, plan, and execute complex business tasks.",
    fullDesc: "Build intelligent AI agents that integrate with your data sources and tools to deliver outcomes without constant human oversight.",
    features: [
      "Autonomous Task Execution",
      "Multi-Agent Orchestration",
      "Tool-Use & Function Calling",
      "Memory & Context Management",
      "Custom Knowledge Bases",
      "Safety & Guardrails",
    ],
    pricing: "From $15,000",
    timeline: "4–12 weeks",
    technologies: ["OpenAI", "LangChain", "CrewAI", "AutoGen", "Vector DBs"],
  },
  {
    icon: MessageSquare,
    imageUrl: `${BASE}photo-1587560699334-cc4ff634909a${UQ}`,
    title: "AI Chatbots & Assistants",
    shortDesc: "Bilingual bots (AR/EN) across WhatsApp, web, and omnichannel touchpoints.",
    fullDesc: "Deploy conversational AI that understands context, handles complex queries, and seamlessly escalates to human agents when needed.",
    features: [
      "WhatsApp Business Automation",
      "Multi-language Support (AR/EN)",
      "Context-Aware Conversations",
      "CRM Integration",
      "Lead Qualification",
      "Human Handoff System",
    ],
    pricing: "From $10,000",
    timeline: "3–6 weeks",
    technologies: ["GPT-4", "WhatsApp API", "Dialogflow", "Node.js", "Python"],
  },
  {
    icon: MapPin,
    imageUrl: `${BASE}photo-1556742031-c6961e8560b0${UQ}`,
    title: "Google Business Optimisation",
    shortDesc: "Setup, verification, SEO & automated review management for maximum visibility.",
    fullDesc: "Dominate local search results with comprehensive Google Business Profile optimisation, from initial setup to ongoing analytics reporting.",
    features: [
      "Profile Setup & Verification",
      "Local SEO Optimisation",
      "Review Generation Automation",
      "Photo & Content Management",
      "Multi-location Management",
      "Google Maps Ranking",
    ],
    pricing: "From $2,000",
    timeline: "1–3 weeks",
    technologies: ["Google APIs", "SEO Tools", "Analytics", "Review Platforms"],
  },
  {
    icon: DatabaseIcon,
    imageUrl: `${BASE}photo-1460925895917-afdab827c52f${UQ}`,
    title: "CRM & ERP Systems",
    shortDesc: "Custom Odoo implementations and bespoke business management solutions.",
    fullDesc: "Modernise business operations with custom CRM/ERP solutions that integrate with your existing tools and scale with your team.",
    features: [
      "Custom CRM Development",
      "Odoo Implementation & Customisation",
      "Workflow Digitisation",
      "Inventory Management",
      "HR & Payroll Modules",
      "Third-party Integrations",
    ],
    pricing: "From $12,000",
    timeline: "6–16 weeks",
    technologies: ["Odoo", "Python", "React", "PostgreSQL", "Docker"],
  },
  {
    icon: Shield,
    imageUrl: `${BASE}photo-1512453979798-5ea266f8880c${UQ}`,
    title: "UAE Government Integrations",
    shortDesc: "UAE PASS, government APIs, and digital identity — fully TDRA compliant.",
    fullDesc: "Navigate UAE's digital infrastructure with specialist integration services — UAE PASS, government portals, and national digital identity systems.",
    features: [
      "UAE PASS Authentication",
      "Government Portal APIs",
      "Smart Dubai Integration",
      "Digital Signature Systems",
      "Compliance & Data Security",
      "Arabic-first UI/UX",
    ],
    pricing: "From $15,000",
    timeline: "4–10 weeks",
    technologies: ["UAE PASS SDK", "REST APIs", "OAuth 2.0", "Node.js", "React"],
  },
  {
    icon: Code2,
    imageUrl: `${BASE}photo-1555066931-4365d14bab8c${UQ}`,
    title: "Full-Stack Development",
    shortDesc: "Web and mobile apps, scalable APIs, and cloud-native systems built to last.",
    fullDesc: "End-to-end development of modern web and mobile applications using cutting-edge technologies that grow with your business.",
    features: [
      "React & Next.js Web Apps",
      "React Native Mobile Apps",
      "Node.js & Python Backends",
      "RESTful & GraphQL APIs",
      "Cloud Infrastructure (AWS/Azure)",
      "CI/CD & DevOps",
    ],
    pricing: "From $5,000",
    timeline: "4–16 weeks",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    icon: Brain,
    imageUrl: `${BASE}photo-1551288049-bebda4e38f71${UQ}`,
    title: "AI & Data Solutions",
    shortDesc: "Predictive analytics, dashboards, and AI reporting that turns data into advantage.",
    fullDesc: "Unlock strategic value from your data with AI-powered analytics, custom dashboards, and predictive models that drive decisions.",
    features: [
      "Predictive Analytics Models",
      "Custom Dashboard Development",
      "Data Pipeline Engineering",
      "Business Intelligence",
      "Computer Vision Solutions",
      "NLP & Text Analytics",
    ],
    pricing: "From $18,000",
    timeline: "6–14 weeks",
    technologies: ["Python", "TensorFlow", "Power BI", "Spark", "OpenAI"],
  },
];

const whyUs = [
  { icon: Star,      title: "UAE Specialists",      desc: "Deep knowledge of UAE government systems, compliance, and market requirements." },
  { icon: Users,     title: "End-to-End Delivery",  desc: "From discovery to launch — design, build, test, and deploy under one roof." },
  { icon: Award,     title: "100+ Projects",        desc: "Proven track record across GCC, Europe, and Asia with 98% client satisfaction." },
  { icon: TrendingUp,title: "AI-First Approach",    desc: "Every solution is built to leverage AI from day one, not retrofitted later." },
];

const serviceBenefits = [
  ["Reduce repetitive work", "Shorten approval cycles", "Create measurable ROI"],
  ["Automate complex decisions", "Connect tools and data", "Scale expert capacity"],
  ["Improve response times", "Qualify leads automatically", "Support Arabic and English"],
  ["Increase local discovery", "Automate reputation loops", "Track search performance"],
  ["Unify business operations", "Improve data quality", "Increase process visibility"],
  ["Meet UAE compliance needs", "Secure digital identity", "Accelerate public services"],
  ["Ship resilient platforms", "Modernize legacy systems", "Prepare for scale"],
  ["Turn data into decisions", "Forecast performance", "Reveal operational gaps"],
];

const deliverySteps = ["Audit", "Architecture", "Pilot", "Scale"];

const techStack = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL",
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "OpenAI", "Claude",
  "LangChain", "UAE PASS", "Odoo", "React Native", "FastAPI", "Redis",
];

const Services = () => {
  const { direction } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-foreground">
          <div className="absolute inset-0 dot-bg-dark opacity-70 pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-7 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Enterprise-Grade Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 animate-fade-in leading-tight">
              Our <span className="gradient-text-animated">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/65 max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed">
              AI-powered automation, intelligent agents, and enterprise digital solutions
              designed for UAE government and corporate excellence.
            </p>

            {/* Trust chips — 2-col grid on mobile, inline on sm+ */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 md:mb-10 animate-fade-in max-w-sm sm:max-w-none mx-auto">
              {[
                { icon: CheckCircle2, label: "8 Specialised Solutions" },
                { icon: CheckCircle2, label: "100+ Projects Delivered" },
                { icon: CheckCircle2, label: "UAE Gov Trusted" },
                { icon: CheckCircle2, label: "TDRA Compliant" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/8 border border-white/12 text-white/75 text-xs sm:text-sm justify-center sm:justify-start">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button variant="hero" size="lg" className="press-effect btn-arrow" asChild>
                <a href="/contact">
                  Book Free Consultation
                  <ArrowRight data-arrow className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/8 text-white hover:bg-white/14 hover:border-white/30 press-effect"
                asChild
              >
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Eight specialist service lines — each delivered with a dedicated team, clear pricing, and a fixed timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                const accent = accentColors[index % accentColors.length];
                const num = String(index + 1).padStart(2, "0");

                return (
                  <TiltCard key={index} tiltLimit={6} scale={1.015} className="rounded-2xl h-full">
                    <Card className="h-full flex flex-col overflow-hidden border border-border/70 bg-card shadow-sm hover:shadow-xl transition-all duration-400 group relative">
                      {/* Gradient accent top bar */}
                      <div
                        className="h-[3px] w-full flex-shrink-0"
                        style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                      />

                      {/* Faded number watermark */}
                      <span className="service-number">{num}</span>

                      <CardHeader className="p-5 pb-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </CardHeader>

                      <CardContent className="p-5 pt-0 flex-1 flex flex-col">
                        {/* Service image */}
                        <div className="relative w-full h-[120px] rounded-xl overflow-hidden mb-5 flex-shrink-0">
                          <img
                            src={service.imageUrl}
                            alt={service.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/10 to-transparent" />
                          <div
                            className="absolute bottom-2 left-2 right-2 h-[2px] rounded-full opacity-80"
                            style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                          />
                        </div>

                        {/* Features */}
                        <ul className="space-y-1.5 mb-5 flex-1">
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {service.technologies.slice(0, 4).map((t, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-[10px] px-1.5 py-0 bg-primary/8 text-primary border border-primary/15"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>

                        <div className="mb-4 rounded-xl border border-border/70 bg-muted/40 p-3">
                          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground">
                            <Layers3 className="h-3.5 w-3.5 text-primary" />
                            Key benefits
                          </div>
                          <div className="space-y-1.5">
                            {serviceBenefits[index].map((benefit) => (
                              <div key={benefit} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground">
                            <Workflow className="h-3.5 w-3.5 text-primary" />
                            Delivery workflow
                          </div>
                          <div className="grid grid-cols-4 gap-1.5">
                            {deliverySteps.map((step, stepIndex) => (
                              <div key={step} className="rounded-lg border border-primary/15 bg-primary/5 px-1.5 py-2 text-center text-[10px] font-semibold text-primary">
                                {String(stepIndex + 1).padStart(2, "0")}<br />
                                <span className="text-muted-foreground font-medium">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing + timeline row */}
                        <div className="flex items-center justify-between text-xs mb-4 pt-3 border-t border-border/60">
                          <span className="flex items-center gap-1 font-semibold text-foreground">
                            <Tag className="h-3 w-3 text-primary" />
                            {service.pricing}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {service.timeline}
                          </span>
                        </div>

                        <Button variant="hero" size="sm" className="w-full press-effect btn-arrow text-xs" asChild>
                          <a href="/contact">
                            Get Started
                            <ArrowRight data-arrow className="h-3.5 w-3.5 ml-1.5" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Delivery Model ── */}
        <section className="py-14 md:py-20 bg-background border-t border-border/40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Webflow-ready delivery system
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  One proven process, tailored to each solution.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every engagement includes structured discovery, UX architecture, technical design,
                  implementation, launch support, analytics, and a handover package your team can maintain.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Reusable components", "Design tokens", "Accessible UI", "SEO foundations"].map((item) => (
                    <div key={item} className="rounded-xl border border-border/70 bg-card p-4 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="mb-2 h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <ServiceFlowIllustration className="drop-shadow-xl" />
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Why <span className="gradient-text">Azain Tech?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're not a generic agency — we're a specialist team built around UAE enterprise needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="text-center p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-16 bg-background border-t border-border/40">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              Technologies We Work With
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-border/70 bg-muted/50 text-muted-foreground text-xs font-medium hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-foreground">
          <div className="absolute inset-0 dot-bg-dark opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Ready to Start?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to <span className="gradient-text-animated">Transform</span><br />Your Business?
              </h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                Book a free consultation and discover how our AI-powered solutions
                can optimise your operations and accelerate growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="hero" size="lg" className="press-effect btn-arrow" asChild>
                  <a href="/contact">
                    Book Free Consultation
                    <ArrowRight data-arrow className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/8 text-white hover:bg-white/14 hover:border-white/30 press-effect"
                  asChild
                >
                  <a href="/portfolio">View Our Work</a>
                </Button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-10 border-t border-white/10">
                {[
                  { value: "100+", label: "Happy Clients" },
                  { value: "98%",  label: "Satisfaction Rate" },
                  { value: "24/7", label: "Support" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                    <div className="text-white/50 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Services;
