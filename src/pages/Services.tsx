import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Bot,
  MessageSquare,
  MapPin,
  Database as DatabaseIcon,
  Shield,
  Code2,
  Brain,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, direction } = useLanguage();

  const services = [
    {
      icon: Zap,
      title: "AI Automation Solutions",
      description: "Intelligent workflows, process automation, and business optimization systems that eliminate manual tasks.",
      fullDescription: "Transform your operations with AI-powered automation that streamlines workflows, reduces human error, and scales your business processes. We design and deploy end-to-end automation solutions tailored to your industry.",
      features: [
        "Intelligent Workflow Design",
        "Process Mining & Optimization",
        "RPA with AI Enhancement",
        "Document Processing Automation",
        "Email & Communication Automation",
        "Integration with Existing Tools",
        "Real-time Monitoring Dashboards",
        "ROI Tracking & Analytics"
      ],
      pricing: "Starting at $8,000",
      timeline: "3-8 weeks",
      technologies: ["Python", "Make.com", "Zapier", "LangChain", "Custom APIs", "n8n"]
    },
    {
      icon: Bot,
      title: "AI Agents Development",
      description: "Autonomous agents, multi-agent systems, and decision-making solutions for complex business scenarios.",
      fullDescription: "Build intelligent AI agents that can reason, plan, and execute tasks autonomously. Our agents integrate with your data sources and tools to deliver actionable outcomes without constant human oversight.",
      features: [
        "Autonomous Task Execution",
        "Multi-Agent Orchestration",
        "Tool-Use & Function Calling",
        "Memory & Context Management",
        "Custom Knowledge Bases",
        "Safety & Guardrails",
        "Performance Monitoring",
        "Continuous Learning Loops"
      ],
      pricing: "Starting at $15,000",
      timeline: "4-12 weeks",
      technologies: ["OpenAI", "LangChain", "CrewAI", "AutoGen", "Python", "Vector DBs"]
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description: "Website bots, WhatsApp bots, and omnichannel customer automation powered by advanced NLP.",
      fullDescription: "Deploy intelligent conversational AI across all customer touchpoints. Our chatbots understand context, handle complex queries, and seamlessly escalate to human agents when needed — in multiple languages including Arabic.",
      features: [
        "Website Chat Integration",
        "WhatsApp Business Automation",
        "Multi-language Support (AR/EN)",
        "Context-Aware Conversations",
        "CRM Integration",
        "Lead Qualification",
        "Appointment Scheduling",
        "Human Handoff System"
      ],
      pricing: "Starting at $10,000",
      timeline: "3-6 weeks",
      technologies: ["GPT-4", "Dialogflow", "WhatsApp API", "Twilio", "Node.js", "Python"]
    },
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      description: "Setup, verification, SEO optimization, and automated review management for maximum local visibility.",
      fullDescription: "Dominate local search results with our comprehensive Google Business Profile optimization service. We handle everything from initial setup to ongoing review management and analytics reporting.",
      features: [
        "Profile Setup & Verification",
        "Local SEO Optimization",
        "Review Generation Automation",
        "Photo & Content Management",
        "Competitor Analysis",
        "Multi-location Management",
        "Performance Analytics",
        "Google Maps Ranking"
      ],
      pricing: "Starting at $2,000",
      timeline: "1-3 weeks",
      technologies: ["Google APIs", "SEO Tools", "Analytics", "Review Platforms"]
    },
    {
      icon: DatabaseIcon,
      title: "CRM & ERP Solutions",
      description: "Custom CRM/ERP systems, Odoo integrations, and complete workflow digitization for enterprises.",
      fullDescription: "Modernize your business operations with custom CRM and ERP solutions. We specialize in Odoo implementations and custom-built systems that integrate with your existing tools and processes.",
      features: [
        "Custom CRM Development",
        "Odoo Implementation & Customization",
        "Workflow Digitization",
        "Inventory Management",
        "HR & Payroll Modules",
        "Financial Reporting",
        "Third-party Integrations",
        "Mobile Access"
      ],
      pricing: "Starting at $12,000",
      timeline: "6-16 weeks",
      technologies: ["Odoo", "Python", "React", "PostgreSQL", "Node.js", "Docker"]
    },
    {
      icon: Shield,
      title: "UAE Integrations",
      description: "UAE PASS integration, government API connections, and smart authentication built for the UAE digital ecosystem.",
      fullDescription: "Navigate the UAE's digital infrastructure with our specialized integration services. We build compliant, secure connections to UAE PASS, government portals, and national digital identity systems.",
      features: [
        "UAE PASS Authentication",
        "Government Portal APIs",
        "Smart Dubai Integration",
        "Digital Signature Systems",
        "Compliance & Data Security",
        "National ID Verification",
        "E-Dirham Payment Gateway",
        "Arabic-first UI/UX"
      ],
      pricing: "Starting at $15,000",
      timeline: "4-10 weeks",
      technologies: ["UAE PASS SDK", "REST APIs", "OAuth 2.0", "Node.js", "React", "AWS"]
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Web and mobile apps, scalable systems, robust APIs, and cloud-native solutions.",
      fullDescription: "End-to-end development of modern web and mobile applications using cutting-edge technologies. We build scalable, secure, and performant applications that grow with your business.",
      features: [
        "React & Next.js Web Apps",
        "React Native Mobile Apps",
        "Node.js & Python Backends",
        "RESTful & GraphQL APIs",
        "Cloud Infrastructure (AWS/Azure)",
        "CI/CD & DevOps",
        "Database Architecture",
        "Performance Optimization"
      ],
      pricing: "Starting at $5,000",
      timeline: "4-16 weeks",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    },
    {
      icon: Brain,
      title: "AI & Data Solutions",
      description: "Predictive analytics, intelligent dashboards, and AI-powered reporting that turns data into competitive advantage.",
      fullDescription: "Unlock the strategic value of your data with AI-powered analytics and visualization. We build custom dashboards, predictive models, and reporting systems that drive informed decision-making.",
      features: [
        "Predictive Analytics Models",
        "Custom Dashboard Development",
        "AI-Powered Reporting",
        "Data Pipeline Engineering",
        "Business Intelligence",
        "Real-time Data Processing",
        "Computer Vision Solutions",
        "NLP & Text Analytics"
      ],
      pricing: "Starting at $18,000",
      timeline: "6-14 weeks",
      technologies: ["Python", "TensorFlow", "Power BI", "Apache Spark", "Snowflake", "OpenAI"]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              ⚡ Enterprise-Grade Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
              AI-powered automation, intelligent agents, and enterprise digital solutions 
              designed for UAE government and corporate excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>8 Specialized Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>UAE Government Trusted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <TiltCard key={index} tiltLimit={8} scale={1.02} className="rounded-xl h-full">
                    <Card className="h-full flex flex-col overflow-hidden border-2 border-[hsl(21_100%_50%)]/30 bg-white shadow-lg hover:shadow-[0_20px_50px_-15px_hsl(21_100%_50%/0.45)] hover:border-[hsl(21_100%_50%)] transition-all duration-300 group animate-fade-in">
                      <CardHeader className="p-6">
                        <div className="w-14 h-14 bg-[hsl(21_100%_50%)] rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[hsl(21_100%_50%)] transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600 mt-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                        <div className="space-y-2 mb-6 flex-1">
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-[hsl(21_100%_50%)] flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {service.technologies.slice(0, 4).map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-[10px] px-2 py-0.5 bg-[hsl(21_100%_50%)]/10 text-[hsl(21_100%_50%)] border border-[hsl(21_100%_50%)]/20 hover:bg-[hsl(21_100%_50%)]/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="hero" className="w-full group/btn" asChild>
                          <a href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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

        {/* CTA */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in">
                Book a free consultation and discover how our AI-powered solutions 
                can optimize your operations and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="/portfolio">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
