import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Cloud, 
  Users, 
  Smartphone, 
  Database,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Bot,
  Zap,
  Megaphone,
  TrendingUp,
  Globe
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Fullstack Web Development",
      description: "End-to-end web solutions using React, Node.js, and modern frameworks that deliver exceptional user experiences.",
      fullDescription: "We create scalable, responsive web applications using cutting-edge technologies like React, Next.js, Node.js, and modern databases. Our development process ensures high performance, security, and maintainability.",
      features: [
        "React & Next.js Development",
        "Node.js & Express Backend",
        "Database Design & Optimization",
        "RESTful & GraphQL APIs",
        "Responsive UI/UX Design",
        "Performance Optimization",
        "Security Implementation",
        "Testing & Quality Assurance"
      ],
      pricing: "Starting at $15,000",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android.",
      fullDescription: "Build engaging mobile experiences with our expert team. We develop both native and cross-platform apps that deliver exceptional performance and user experience across all devices.",
      features: [
        "React Native Development",
        "Native iOS (Swift) Development",
        "Native Android (Kotlin) Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Analytics Integration"
      ],
      pricing: "Starting at $20,000",
      timeline: "6-16 weeks",
      technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Redux", "TypeScript"]
    },
    {
      icon: Bot,
      title: "AI Chatbot Solutions",
      description: "Intelligent conversational AI powered by advanced language models for 24/7 customer support and engagement.",
      fullDescription: "Transform customer interactions with intelligent AI chatbots that understand context, provide accurate responses, and seamlessly integrate with your existing systems. Our chatbots are built using state-of-the-art language models.",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Context-Aware Responses",
        "Seamless Platform Integration",
        "Custom Training on Your Data",
        "Analytics & Insights",
        "Human Handoff Capability",
        "Voice Integration"
      ],
      pricing: "Starting at $12,000",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "GPT-4", "Langchain", "Python", "Node.js", "WebSocket"]
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline workflows and boost efficiency using AI technologies to perform tasks without human intervention.",
      fullDescription: "AI automation uses artificial intelligence to perform repetitive tasks, optimize processes, and make intelligent decisions automatically. We help businesses reduce costs, improve accuracy, and scale operations.",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Intelligent Decision Making",
        "Task Scheduling & Management",
        "Document Processing",
        "Email & Communication Automation",
        "Data Entry Automation",
        "Integration with Existing Tools"
      ],
      pricing: "Starting at $10,000",
      timeline: "3-10 weeks",
      technologies: ["Python", "RPA Tools", "AI APIs", "Zapier", "Make.com", "Custom Scripts"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Integrate cutting-edge AI solutions to automate processes, enhance experiences, and unlock valuable insights.",
      fullDescription: "Transform your business with AI-powered solutions. From recommendation systems to predictive analytics and computer vision, we integrate cutting-edge AI technologies into your applications.",
      features: [
        "ChatGPT & OpenAI Integration",
        "Custom Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Recommendation Systems",
        "Automated Decision Making",
        "Data Pipeline Development"
      ],
      pricing: "Starting at $25,000",
      timeline: "8-20 weeks",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Langchain", "Pandas", "scikit-learn"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and DevOps practices for reliable, high-performance applications.",
      fullDescription: "Modernize your infrastructure with cloud-native solutions. We provide comprehensive cloud migration, containerization, and DevOps services that ensure scalability, reliability, and security.",
      features: [
        "AWS & Azure Cloud Setup",
        "Docker & Kubernetes",
        "CI/CD Pipeline Development",
        "Infrastructure as Code",
        "Auto-scaling & Load Balancing",
        "Monitoring & Logging",
        "Security & Compliance",
        "Cost Optimization"
      ],
      pricing: "Starting at $12,000",
      timeline: "3-10 weeks",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"]
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into actionable insights with comprehensive data solutions.",
      fullDescription: "Unlock the power of your data with our end-to-end data solutions. From data pipelines and warehousing to advanced analytics and visualization, we help you make data-driven decisions.",
      features: [
        "Data Pipeline Development",
        "Data Warehouse Design",
        "ETL/ELT Processes",
        "Real-time Data Processing",
        "Business Intelligence Dashboards",
        "Data Visualization",
        "Performance Analytics",
        "Predictive Modeling"
      ],
      pricing: "Starting at $18,000",
      timeline: "6-14 weeks",
      technologies: ["Python", "Apache Airflow", "Snowflake", "Tableau", "Power BI", "Spark"]
    },
    {
      icon: Users,
      title: "Digital Consulting",
      description: "Strategic technology consulting to navigate digital transformation and optimize your technology stack for maximum ROI.",
      fullDescription: "Navigate the complex landscape of digital transformation with our expert consulting services. We analyze your current systems, identify opportunities, and create a roadmap for technological advancement.",
      features: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "System Architecture Review",
        "Process Optimization",
        "Technology Roadmap Development",
        "Risk Assessment & Mitigation",
        "Change Management Support",
        "Performance & Security Audits"
      ],
      pricing: "Starting at $8,000",
      timeline: "2-8 weeks",
      technologies: ["Various", "Based on", "Client Needs", "And Current", "Technology", "Stack"]
    },
    {
      icon: Megaphone,
      title: "Social Media Advertising",
      description: "Comprehensive digital advertising campaigns across TikTok, Instagram, Google Ads, and YouTube to maximize ROI.",
      fullDescription: "Drive engagement and conversions with data-driven social media advertising strategies. We create, manage, and optimize campaigns across all major platforms to reach your target audience and achieve measurable results.",
      features: [
        "TikTok Ads Management",
        "Instagram Marketing Campaigns",
        "Google Ads (Search & Display)",
        "YouTube Video Advertising",
        "Audience Targeting & Segmentation",
        "Creative Content Development",
        "A/B Testing & Optimization",
        "Performance Analytics & Reporting"
      ],
      pricing: "Starting at $5,000/month",
      timeline: "Ongoing campaigns",
      technologies: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics Tools", "Creative Suite"]
    },
    {
      icon: TrendingUp,
      title: "Brand Development for Startups",
      description: "Complete brand identity and marketing strategy for startups, from concept to market launch and beyond.",
      fullDescription: "Build a strong brand foundation from day one. We help startups create compelling brand identities, develop go-to-market strategies, and execute launch campaigns that capture attention and drive growth.",
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Market Research & Analysis",
        "Go-to-Market Strategy",
        "Launch Campaign Execution",
        "Social Media Presence Setup",
        "Content Marketing Strategy",
        "Brand Guidelines & Assets"
      ],
      pricing: "Starting at $8,000",
      timeline: "4-10 weeks",
      technologies: ["Adobe Suite", "Figma", "Content Tools", "Social Platforms", "Analytics"]
    },
    {
      icon: Globe,
      title: "Global Advertising Campaigns",
      description: "Multi-platform international advertising campaigns that expand your brand presence across global markets.",
      fullDescription: "Scale your business globally with expertly crafted international advertising campaigns. We develop localized strategies that resonate with diverse audiences while maintaining brand consistency across all regions.",
      features: [
        "International SEO Strategy",
        "Multi-region Campaign Management",
        "Localization & Cultural Adaptation",
        "Cross-platform Coordination",
        "Global Performance Analytics",
        "Market Entry Strategies",
        "Budget Optimization Across Regions",
        "Compliance with Local Regulations"
      ],
      pricing: "Starting at $15,000/month",
      timeline: "Ongoing campaigns",
      technologies: ["Global Ad Networks", "SEO Tools", "Translation Services", "Analytics Platforms"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              💼 Professional Services Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
              Comprehensive technology solutions designed to accelerate your business growth 
              and deliver exceptional digital experiences that drive results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>11 Specialized Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <Card key={index} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group animate-fade-in">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Service Info */}
                      <div className={`lg:col-span-2 p-8 md:p-10 ${!isEven ? 'lg:col-start-1' : ''}`}>
                        <CardHeader className="p-0 mb-6">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                              </CardTitle>
                              <CardDescription className="text-base md:text-lg">
                                {service.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                            {service.fullDescription}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-3 group/item">
                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>

                      {/* Service Details */}
                      <div className={`bg-gradient-to-br from-secondary/40 to-secondary/20 p-8 md:p-10 flex flex-col justify-between ${!isEven ? 'lg:col-start-3' : ''}`}>
                        <div className="space-y-8">
                          {/* Pricing */}
                          <div className="flex items-start space-x-4 group/detail">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/detail:bg-primary/20 transition-colors">
                              <DollarSign className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Investment</p>
                              <p className="text-lg font-bold text-foreground">{service.pricing}</p>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div className="flex items-start space-x-4 group/detail">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/detail:bg-primary/20 transition-colors">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Timeline</p>
                              <p className="text-lg font-bold text-foreground">{service.timeline}</p>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Technologies Used</p>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs px-3 py-1 hover:bg-primary hover:text-white transition-colors cursor-default">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-8 space-y-3">
                          <Button variant="hero" className="w-full group/btn">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" className="w-full" asChild>
                            <a href="/contact">Request Quote</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Ready to Transform Your <span className="gradient-text">Business</span>?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in">
                Let's discuss your project and create a custom solution that drives real results 
                for your business. Our expert team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="/contact">
                    Start Your Project
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
              
              {/* Trust Indicators */}
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