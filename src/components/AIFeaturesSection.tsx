import { useState } from "react";
import {
  Bot, Mic, Brain, Zap, Globe, Shield, BarChart3, Code2,
  MessageSquare, Cpu, Eye, Workflow, Database, CloudCog, Smartphone, Wand2
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "all" | "ai" | "dev" | "cloud" | "uae";

const features = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Autonomous AI agents that handle complex, multi-step business tasks — from lead qualification to invoice processing — without human intervention.",
    category: "ai" as Category,
    accent: "#FF6B35",
    size: "large",
  },
  {
    icon: MessageSquare,
    title: "Bilingual AI Chatbots",
    description: "Arabic & English chatbots deployed on WhatsApp, web, and mobile. Context-aware, multi-turn conversations that feel human.",
    category: "ai" as Category,
    accent: "#4DB6AC",
    size: "normal",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Analyze images and video streams for quality control, document extraction, and visual automation.",
    category: "ai" as Category,
    accent: "#7C4DFF",
    size: "normal",
  },
  {
    icon: Brain,
    title: "LLM Integration",
    description: "Embed GPT-4, Claude, and Gemini into your workflows. RAG pipelines, fine-tuning, and prompt engineering.",
    category: "ai" as Category,
    accent: "#FF6B35",
    size: "normal",
  },
  {
    icon: Mic,
    title: "Voice AI",
    description: "Speech-to-text and text-to-speech for Arabic and English. Real-time transcription, voice assistants, and IVR automation.",
    category: "ai" as Category,
    accent: "#F06292",
    size: "normal",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "ML models that forecast demand, detect anomalies, and surface actionable insights from your business data.",
    category: "ai" as Category,
    accent: "#26A69A",
    size: "large",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile apps built with React, Next.js, React Native, Node.js, and Python. From MVP to enterprise scale.",
    category: "dev" as Category,
    accent: "#42A5F5",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS & Android applications with React Native. App Store & Play Store publishing included.",
    category: "dev" as Category,
    accent: "#66BB6A",
    size: "normal",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Eliminate repetitive tasks with RPA, workflow orchestration, and API integration across your business tools.",
    category: "dev" as Category,
    accent: "#FFA726",
    size: "normal",
  },
  {
    icon: Database,
    title: "CRM & ERP Systems",
    description: "Custom Odoo implementations and bespoke CRM/ERP solutions tailored to your operations and team workflows.",
    category: "dev" as Category,
    accent: "#AB47BC",
    size: "normal",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description: "Scalable AWS, GCP, and Azure architectures. CI/CD pipelines, containerisation with Docker & Kubernetes.",
    category: "cloud" as Category,
    accent: "#4DB6AC",
    size: "large",
  },
  {
    icon: Cpu,
    title: "AI Model Serving",
    description: "Deploy and manage ML models at scale. GPU-optimised inference, model versioning, and monitoring dashboards.",
    category: "cloud" as Category,
    accent: "#FF6B35",
    size: "normal",
  },
  {
    icon: Shield,
    title: "UAE PASS Integration",
    description: "Seamlessly verify user identities using UAE's national digital identity platform. Fully compliant with TDRA standards.",
    category: "uae" as Category,
    accent: "#4DB6AC",
    size: "large",
  },
  {
    icon: Globe,
    title: "UAE Government APIs",
    description: "Integration with UAE government portals — DED, MOHRE, ADDA, and other federal/emirate-level systems.",
    category: "uae" as Category,
    accent: "#FF6B35",
    size: "normal",
  },
  {
    icon: Wand2,
    title: "Generative AI Apps",
    description: "Build content generators, image tools, and creative AI products powered by the latest foundation models.",
    category: "ai" as Category,
    accent: "#E91E63",
    size: "normal",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    description: "ETL pipelines, data warehouses, and real-time streaming with Apache Kafka, Spark, and BigQuery.",
    category: "cloud" as Category,
    accent: "#26C6DA",
    size: "normal",
  },
];

const AIFeaturesSection = () => {
  const [active, setActive] = useState<Category>("all");
  const { t } = useLanguage();

  const tabs: { id: Category; labelKey: string; emoji: string }[] = [
    { id: "all",   labelKey: "ai.tab.all",   emoji: "⚡" },
    { id: "ai",    labelKey: "ai.tab.ai",    emoji: "🤖" },
    { id: "dev",   labelKey: "ai.tab.dev",   emoji: "💻" },
    { id: "cloud", labelKey: "ai.tab.cloud", emoji: "☁️" },
    { id: "uae",   labelKey: "ai.tab.uae",   emoji: "🇦🇪" },
  ];

  const visible = active === "all" ? features : features.filter((f) => f.category === active);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-foreground">

      {/* Dark dot grid overlay */}
      <div className="absolute inset-0 dot-bg-dark pointer-events-none opacity-100" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[22rem] h-[22rem] rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-8 md:mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            🤖 {t("ai.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("ai.heading1")}{" "}
            <span className="gradient-text-animated">{t("ai.heading2")}</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t("ai.subtitle")}
          </p>
        </div>

        {/* ── Category Tabs — horizontal scroll on mobile ── */}
        <div className="scroll-x mb-8 md:mb-12 reveal -mx-4 px-4">
          <div className="flex gap-2 w-max md:w-auto md:flex-wrap md:justify-center mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={[
                  "flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border whitespace-nowrap flex-shrink-0",
                  active === tab.id
                    ? "bg-primary text-white border-primary shadow-[0_0_24px_-4px_hsl(21_100%_50%/0.6)]"
                    : "bg-white/5 text-white/65 border-white/10 hover:bg-white/10 hover:text-white/90 hover:border-white/20",
                ].join(" ")}
              >
                <span>{tab.emoji}</span>
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {visible.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            return (
              <div
                key={`${active}-${index}`}
                className={[
                  "bento-card group p-6 cursor-default animate-fade-in",
                  isLarge ? "sm:col-span-2" : "",
                ].join(" ")}
                style={{
                  animationDelay: `${index * 55}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0"
                  style={{ background: `${feature.accent}22`, border: `1px solid ${feature.accent}44` }}
                >
                  <Icon style={{ color: feature.accent, width: 20, height: 20 }} />
                </div>

                {/* Text */}
                <h3
                  className="font-semibold text-white text-base mb-2 transition-colors duration-300 group-hover:text-[var(--accent-col)]"
                  style={{ "--accent-col": feature.accent } as React.CSSProperties}
                >
                  {feature.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[1.25rem]"
                  style={{ background: `linear-gradient(90deg, ${feature.accent}, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Strip ── */}
        <div className="mt-10 md:mt-16 reveal">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div>
              <p className="text-white font-semibold text-base md:text-lg mb-1">{t("ai.cta.heading")}</p>
              <p className="text-white/55 text-sm">{t("ai.cta.sub")}</p>
            </div>
            <a
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-sm text-white primary-gradient hover:opacity-90 transition-opacity shadow-[0_4px_24px_-4px_hsl(21_100%_50%/0.5)] press-effect flex-shrink-0 w-full sm:w-auto justify-center"
            >
              {t("ai.cta.btn")}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFeaturesSection;
