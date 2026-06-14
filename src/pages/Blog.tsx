import { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight, BookOpen, Brain, Calendar, CheckCircle2, Clock,
  Cloud, Code2, Cpu, Mail, Search, ShieldCheck, Smartphone,
  Sparkles, TrendingUp, UserRound, X, Tag,
} from "lucide-react";
import azainLogo from "@/assets/azain-tech-logo.png";
import aiFeaturedImage      from "@/assets/blog/ai-integration-featured.jpg";
import microservicesImage   from "@/assets/blog/microservices-docker.jpg";
import reactPerfImage       from "@/assets/blog/react-performance.jpg";
import cloudMigrationImage  from "@/assets/blog/cloud-migration.jpg";
import mobileDesignImage    from "@/assets/blog/mobile-first-design.jpg";
import cybersecurityImage   from "@/assets/blog/cybersecurity.jpg";

/* ─── Types ─────────────────────────────────────────── */
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  insight: string;
  featured?: boolean;
};

/* ─── Data ───────────────────────────────────────────── */
const categoryMeta: Record<string, { icon: typeof Brain; color: string; count: number }> = {
  "AI & Machine Learning":  { icon: Brain,       color: "#FF6B35", count: 10 },
  "Frontend Development":   { icon: Code2,       color: "#42A5F5", count: 16 },
  "Backend Development":    { icon: Cpu,         color: "#4DB6AC", count: 14 },
  "Cloud & DevOps":         { icon: Cloud,       color: "#7C4DFF", count: 10 },
  "Mobile Development":     { icon: Smartphone,  color: "#66BB6A", count: 9  },
  "Security":               { icon: ShieldCheck, color: "#F06292", count: 5  },
};

const UQ = "?w=800&q=80&auto=format&fit=crop";
const UB = "https://images.unsplash.com/";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI Integration in Modern Web Applications",
    excerpt: "How AI is moving from isolated features into core product workflows, UX decisions, and operational automation.",
    author: "Azain Tech Research",
    date: "2026-02-15",
    readTime: "8 min",
    category: "AI & Machine Learning",
    image: aiFeaturedImage,
    tags: ["AI Agents", "Automation", "Product Strategy"],
    insight: "Best for leaders planning AI-enabled customer portals and internal platforms.",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "A practical architecture guide for APIs, containers, observability, and deployment patterns that hold up under growth.",
    author: "Engineering Team",
    date: "2026-02-08",
    readTime: "12 min",
    category: "Backend Development",
    image: microservicesImage,
    tags: ["Node.js", "Docker", "Architecture"],
    insight: "Useful for teams modernizing monoliths or planning high-traffic systems.",
  },
  {
    id: 3,
    title: "React Performance Optimization: Advanced Techniques",
    excerpt: "Component rendering, bundle strategy, data fetching, image delivery, and interaction patterns for premium web experiences.",
    author: "Frontend Studio",
    date: "2026-02-03",
    readTime: "10 min",
    category: "Frontend Development",
    image: reactPerfImage,
    tags: ["React", "UX", "Performance"],
    insight: "A strong checklist for SaaS dashboards, landing pages, and conversion-heavy websites.",
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    excerpt: "How to move critical applications to cloud infrastructure with staged releases, cost control, and minimal downtime.",
    author: "Cloud Practice",
    date: "2026-01-28",
    readTime: "15 min",
    category: "Cloud & DevOps",
    image: cloudMigrationImage,
    tags: ["AWS", "Azure", "DevOps"],
    insight: "Designed for operators who need reliability, security, and predictable migration paths.",
  },
  {
    id: 5,
    title: "Mobile-First Design Principles for Modern Apps",
    excerpt: "A UX playbook for designing fast, comfortable, high-retention mobile experiences across customer and field apps.",
    author: "Product Design Team",
    date: "2026-01-19",
    readTime: "7 min",
    category: "Mobile Development",
    image: mobileDesignImage,
    tags: ["Mobile UX", "React Native", "Design Systems"],
    insight: "Ideal for founders and product teams planning app-first workflows.",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Startups and SMEs",
    excerpt: "Essential controls for authentication, data handling, monitoring, and secure delivery before your product scales.",
    author: "Security Desk",
    date: "2026-01-12",
    readTime: "9 min",
    category: "Security",
    image: cybersecurityImage,
    tags: ["Security", "Compliance", "Risk"],
    insight: "A concise roadmap for reducing avoidable product and infrastructure risk.",
  },
  {
    id: 7,
    title: "Best Full Stack Development Company in UAE & Dubai 2026",
    excerpt:
      "Why UAE enterprises choose modern full stack teams — React, Next.js, Node.js, and TypeScript — over legacy stacks, and what to look for when hiring a software development company in Dubai.",
    author: "Azain Tech Engineering",
    date: "2026-03-10",
    readTime: "11 min",
    category: "Frontend Development",
    image: `${UB}photo-1504384308090-c894fdcc538d${UQ}`,
    tags: ["Full Stack", "UAE", "Dubai", "React", "Node.js"],
    insight: "Essential reading for CTOs and founders evaluating software development partners in the UAE market.",
    featured: false,
  },
  {
    id: 8,
    title: "ERP Implementation in UAE & Saudi Arabia — Odoo, Oracle & Custom Solutions",
    excerpt:
      "A practical guide to ERP system selection, implementation timelines, and ROI for UAE and KSA businesses. Covers Odoo, custom ERP builds, and what makes GCC deployments unique.",
    author: "Azain Tech ERP Team",
    date: "2026-03-05",
    readTime: "14 min",
    category: "Backend Development",
    image: `${UB}photo-1552664730-d307ca884978${UQ}`,
    tags: ["ERP", "Odoo", "UAE", "Saudi Arabia", "KSA"],
    insight: "Built for operations directors and finance leads planning ERP rollouts in the GCC.",
    featured: false,
  },
  {
    id: 9,
    title: "AI Development Company in Dubai — Intelligent Solutions for UAE & KSA",
    excerpt:
      "How UAE and Saudi businesses are deploying custom AI agents, LLM pipelines, and intelligent automation aligned with Vision 2030 and UAE's National AI Strategy 2031.",
    author: "Azain Tech AI Lab",
    date: "2026-02-28",
    readTime: "10 min",
    category: "AI & Machine Learning",
    image: `${UB}photo-1620712943543-bcc4688e7485${UQ}`,
    tags: ["AI Development", "UAE", "KSA", "Vision 2030", "LLM"],
    insight: "For business leaders evaluating AI partners in the GCC — covers build vs. buy, deployment models, and ROI.",
    featured: false,
  },
  {
    id: 10,
    title: "Mobile App Development in UAE & Saudi Arabia — iOS, Android & React Native 2026",
    excerpt:
      "Everything you need to know about mobile app development costs, timelines, and tech stacks for UAE and KSA startups and enterprise clients — including App Store publishing and Arabic RTL support.",
    author: "Azain Tech Mobile Team",
    date: "2026-02-20",
    readTime: "9 min",
    category: "Mobile Development",
    image: `${UB}photo-1512941937669-90a1b58e7e9c${UQ}`,
    tags: ["Mobile App", "UAE", "Saudi Arabia", "React Native", "iOS"],
    insight: "Essential for founders and product owners planning mobile-first apps across the GCC.",
    featured: false,
  },
];

const popularTags = ["AI Development UAE", "Full Stack Dubai", "ERP UAE", "Mobile App KSA", "React", "Node.js", "Odoo", "UAE PASS", "Automation", "Vision 2030", "Cloud", "Security"];

const formatDate = (d: string) =>
  new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));

/* ─── Sub-components ─────────────────────────────────── */

/* Category color dot */
const CatDot = ({ category }: { category: string }) => {
  const color = categoryMeta[category]?.color ?? "#FF6B35";
  return <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />;
};

/* Featured card — immersive magazine layout */
const FeaturedCard = ({ post, onClick }: { post: BlogPost; onClick?: () => void }) => (
  <article
    className="group relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl cursor-pointer"
    onClick={onClick}
  >
    {/* Background image */}
    <div className="relative min-h-[480px] md:min-h-[520px]">
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay — heavy at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />

      {/* Content pinned to bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        {/* Pills row */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
            ★ Featured
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white/85 text-xs font-medium">
            {post.category}
          </span>
        </div>

        <h2 className="mb-3 text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h2>
        <p className="mb-5 text-white/70 text-base leading-relaxed max-w-2xl line-clamp-2">{post.excerpt}</p>

        {/* Insight callout */}
        <div className="mb-5 inline-flex items-start gap-2.5 rounded-xl border border-white/15 bg-white/8 backdrop-blur px-4 py-3 max-w-xl">
          <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-xs text-white/75 leading-relaxed">{post.insight}</p>
        </div>

        {/* Meta + CTA row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <UserRound className="h-4 w-4 text-primary" />{post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />{formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />{post.readTime} read
            </span>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity">
            Read Article <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        {/* Tag row */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-medium">
              <Tag className="h-2.5 w-2.5" />{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

/* Article card — standard grid card */
const ArticleCard = ({
  post, onClick,
}: { post: BlogPost; onClick?: () => void }) => {
  const Icon = categoryMeta[post.category]?.icon ?? BookOpen;
  const color = categoryMeta[post.category]?.color ?? "#FF6B35";

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur border border-white/15 text-white text-[11px] font-semibold">
          <Icon className="h-3 w-3" style={{ color }} />
          {post.category}
        </div>

        {/* Read time badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur border border-white/15 text-white/75 text-[11px]">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-[11px] font-medium">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3 flex-1">{post.excerpt}</p>

        {/* Insight */}
        <div className="mb-4 px-3 py-2.5 rounded-lg border border-border/60 bg-muted/40 text-xs text-muted-foreground leading-relaxed line-clamp-2">
          <Sparkles className="inline h-3 w-3 text-primary mr-1.5 mb-0.5" />
          {post.insight}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium">
            <CatDot category={post.category} />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-primary" />
            {formatDate(post.date)}
          </span>
        </div>
      </div>
    </article>
  );
};

/* ─── Page ───────────────────────────────────────────── */
const Blog = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  /* ── Dynamic SEO: title + JSON-LD BlogPosting schema ── */
  useEffect(() => {
    document.title = "Tech Blog — AI, Full Stack, ERP & Mobile App Development in UAE & KSA | Azain Tech";
    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Azain Tech Insights — UAE & KSA Technology Blog",
      "description": "Expert guides on AI development, full stack engineering, ERP implementation, and mobile app development for businesses in UAE, Dubai, Saudi Arabia, and GCC.",
      "url": "https://azaintech.com/blog",
      "publisher": { "@type": "Organization", "name": "Azain Tech", "url": "https://azaintech.com" },
      "keywords": "full stack development UAE, mobile app development Saudi Arabia, AI development company Dubai, ERP implementation UAE, Odoo UAE, software development KSA",
      "blogPost": posts.map((p) => ({
        "@type": "BlogPosting",
        "headline": p.title,
        "description": p.excerpt,
        "datePublished": p.date,
        "author": { "@type": "Organization", "name": p.author },
        "keywords": p.tags.join(", "),
        "articleSection": p.category,
        "publisher": { "@type": "Organization", "name": "Azain Tech" },
        "url": `https://azaintech.com/blog/${p.id}`,
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.title = "Azain Tech — AI Automation, Agents & Digital Solutions in UAE | Dubai, Abu Dhabi";
      document.getElementById("blog-schema")?.remove();
    };
  }, []);

  const isFiltering = query.trim() !== "" || activeCategory !== "All";

  const allMatchingPosts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return posts.filter((post) => {
      const catMatch = activeCategory === "All" || post.category === activeCategory;
      const txtMatch =
        !search ||
        [post.title, post.excerpt, post.category, post.author, ...post.tags]
          .join(" ").toLowerCase().includes(search);
      return catMatch && txtMatch;
    });
  }, [activeCategory, query]);

  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const gridPosts = isFiltering
    ? allMatchingPosts
    : posts.filter((p) => p.id !== featuredPost.id);

  const clearFilters = () => { setQuery(""); setActiveCategory("All"); };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    setActiveCategory("All");
    searchRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">

        {/* ══ HERO ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-foreground py-16 md:py-24">
          <div className="absolute inset-0 dot-bg-dark opacity-70 pointer-events-none" />
          <div className="absolute left-0 top-12 h-72 w-[44vw] bg-gradient-to-r from-primary/22 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-72 w-[42vw] bg-gradient-to-l from-secondary/16 to-transparent blur-3xl pointer-events-none" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Enterprise technology insights
              </div>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-fade-in">
                Ideas that turn tech into{" "}
                <span className="gradient-text-animated">business edge</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/65 animate-fade-in">
                Practical thinking on AI automation, cloud architecture, UX, and secure delivery for UAE and global teams.
              </p>

              {/* Hero search bar — flex layout prevents icon/text overlap */}
              <div
                className="flex items-center gap-3 h-14 max-w-xl mx-auto mb-10 rounded-2xl px-4 animate-fade-in transition-all"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <Search className="h-5 w-5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.45)" }} />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, technologies…"
                  className="flex-1 min-w-0 bg-transparent text-base focus:outline-none blog-hero-input"
                  style={{ color: "white" }}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 hover:opacity-80 transition-opacity"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <X className="h-3.5 w-3.5" style={{ color: "rgba(255,255,255,0.75)" }} />
                  </button>
                )}
              </div>

              {/* Hero stats */}
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto animate-fade-in">
                {[["6", "Expert guides"], ["50+", "Tech topics"], ["2026", "Fresh insights"]].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-white/10 bg-white/6 p-4 text-center">
                    <div className="text-2xl font-extrabold gradient-text">{v}</div>
                    <div className="text-[11px] text-white/50 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FILTER BAR ════════════════════════════════════ */}
        <div className="sticky top-16 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="scroll-x py-3 -mx-4 px-4">
              <div className="flex items-center gap-2 w-max">
                {/* All pill */}
                <button
                  onClick={() => setActiveCategory("All")}
                  className={[
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap flex-shrink-0",
                    activeCategory === "All"
                      ? "bg-primary text-white border-primary shadow-[0_0_20px_-4px_hsl(21_100%_50%/0.5)]"
                      : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                  ].join(" ")}
                >
                  ⚡ All articles
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${activeCategory === "All" ? "bg-white/20" : "bg-muted"}`}>
                    {posts.length}
                  </span>
                </button>

                {/* Category pills */}
                {Object.entries(categoryMeta).map(([cat, meta]) => {
                  const Icon = meta.icon;
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={[
                        "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap flex-shrink-0",
                        isActive
                          ? "text-white border-transparent shadow-md"
                          : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                      ].join(" ")}
                      style={isActive ? { background: meta.color, boxShadow: `0 0 20px -4px ${meta.color}80` } : {}}
                    >
                      <Icon className="h-3.5 w-3.5" style={!isActive ? { color: meta.color } : {}} />
                      {cat}
                      <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20" : "bg-muted"}`}>
                        {meta.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN CONTENT ══════════════════════════════════ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">

              {/* Left column */}
              <div className="min-w-0">

                {/* Active filters indicator */}
                {isFiltering && (
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{allMatchingPosts.length}</span>
                      {" "}{allMatchingPosts.length === 1 ? "article" : "articles"}
                      {query && <> matching <span className="text-primary font-semibold">"{query}"</span></>}
                      {activeCategory !== "All" && <> in <span className="text-primary font-semibold">{activeCategory}</span></>}
                    </p>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted border border-border/60 text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      <X className="h-3 w-3" /> Clear filters
                    </button>
                  </div>
                )}

                {/* Featured post (only when not filtering) */}
                {!isFiltering && (
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-5">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Editor's Pick</p>
                      <div className="flex-1 h-px bg-border/60" />
                    </div>
                    <FeaturedCard post={featuredPost} />
                  </div>
                )}

                {/* Article grid section header */}
                {!isFiltering && (
                  <div className="flex items-center gap-3 mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Latest Analysis</p>
                    <div className="flex-1 h-px bg-border/60" />
                    <p className="text-xs text-muted-foreground">{gridPosts.length} articles</p>
                  </div>
                )}

                {/* Article grid */}
                {gridPosts.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {gridPosts.map((post) => (
                      <ArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  /* Empty state */
                  <div className="flex flex-col items-center justify-center rounded-3xl border border-border/60 bg-muted/30 px-8 py-20 text-center">
                    <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center mb-5 shadow-lg">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
                      No results for{query ? <> "<span className="text-primary font-semibold">{query}</span>"</> : " the current filter"}.
                      Try a different search term or browse another category.
                    </p>
                    <Button variant="outline" onClick={clearFilters} className="press-effect">
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-5 lg:sticky lg:top-[7.5rem] lg:self-start">

                {/* Inline search (desktop sidebar) — flex layout */}
                <div className="hidden lg:flex items-center gap-2.5 h-11 rounded-xl border border-border/60 bg-card px-3.5 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                  <Search className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles…"
                    className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 bg-muted hover:bg-muted-foreground/20 transition-colors"
                    >
                      <X className="h-3 w-3 text-muted-foreground" />
                    </button>
                  )}
                </div>

                {/* Topics card */}
                <div className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden">
                  <div className="px-5 pt-5 pb-3 border-b border-border/60">
                    <h3 className="font-bold text-foreground text-base">Browse Topics</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Filter by practice area</p>
                  </div>
                  <div className="p-3 space-y-1">
                    {Object.entries(categoryMeta).map(([cat, meta]) => {
                      const Icon = meta.icon;
                      const isActive = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(isActive ? "All" : cat)}
                          className={[
                            "group w-full flex items-center justify-between rounded-xl px-3 py-2.5 transition-all text-left",
                            isActive
                              ? "bg-primary/10 border border-primary/20"
                              : "hover:bg-muted/60 border border-transparent",
                          ].join(" ")}
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span
                              className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                              style={{ background: `${meta.color}20`, border: `1px solid ${meta.color}40` }}
                            >
                              <Icon className="h-4 w-4" style={{ color: meta.color }} />
                            </span>
                            <span className={`text-sm font-medium truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                              {cat}
                            </span>
                          </span>
                          <span className={`flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                            {meta.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="relative rounded-2xl overflow-hidden bg-foreground shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />
                  <div className="relative p-5">
                    <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center mb-4 shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">Get the strategy brief</h3>
                    <p className="text-sm leading-relaxed text-white/60 mb-5">
                      Monthly notes on AI, automation, and enterprise delivery. No noise — only useful signals.
                    </p>
                    <div className="space-y-2.5">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full h-11 px-4 rounded-xl border border-white/15 bg-white/8 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/12 transition-all"
                      />
                      <button className="w-full h-11 rounded-xl primary-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_4px_20px_-4px_hsl(21_100%_50%/0.5)] press-effect">
                        Subscribe — it's free
                      </button>
                    </div>
                  </div>
                </div>

                {/* Popular tags */}
                <div className="rounded-2xl border border-border/60 bg-card shadow-sm p-5">
                  <h3 className="font-bold text-foreground text-base mb-1">Popular Tags</h3>
                  <p className="text-xs text-muted-foreground mb-4">Click to search by topic</p>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => {
                      const isActive = query === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={[
                            "px-3 py-1.5 rounded-full border text-xs font-medium transition-all",
                            isActive
                              ? "bg-primary text-white border-primary shadow-[0_0_12px_-2px_hsl(21_100%_50%/0.5)]"
                              : "border-border/60 bg-muted/50 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
                          ].join(" ")}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CTA card */}
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 shadow-sm">
                  <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">Apply this to your business</h3>
                  <div className="space-y-2 mb-5">
                    {["AI roadmap session", "Website UX audit", "Automation strategy"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" size="sm" className="w-full btn-arrow press-effect" asChild>
                    <a href="/contact">
                      Book Free Consultation
                      <ArrowRight data-arrow className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* ══ FOOTER ════════════════════════════════════════ */}
      <footer className="bg-foreground py-12 text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-8">
            <div className="md:col-span-2">
              <img src={azainLogo} alt="Azain Tech" className="mb-4 h-9 w-auto brightness-0 invert" />
              <p className="max-w-md text-sm leading-relaxed text-background/65">
                AI automation, software engineering, and enterprise digital solutions for ambitious teams in the UAE and globally.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-background uppercase tracking-wide">Solutions</h4>
              <ul className="space-y-2 text-sm text-background/60">
                {["AI Automation", "Full-Stack Development", "Cloud Solutions"].map((s) => (
                  <li key={s}><a href="/services" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-background uppercase tracking-wide">Company</h4>
              <ul className="space-y-2 text-sm text-background/60">
                {[["About", "/about"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
            © 2026 Azain Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
