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
  DollarSign
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Fullstack Web Development",
      description: "Complete web solutions from frontend to backend, built with modern frameworks and best practices.",
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
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
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
      icon: Brain,
      title: "AI & Machine Learning Integration",
      description: "Leverage artificial intelligence to automate processes and gain valuable insights from your data.",
      fullDescription: "Transform your business with AI-powered solutions. From chatbots and recommendation systems to predictive analytics and computer vision, we integrate cutting-edge AI technologies into your applications.",
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
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your technology stack and optimize business processes.",
      fullDescription: "Navigate the complex landscape of digital transformation with our expert consulting services. We analyze your current systems, identify opportunities, and create a roadmap for technological advancement.",
      features: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "System Architecture Review",
        "Process Optimization",
        "Technology Roadmap",
        "Risk Assessment",
        "Change Management",
        "Performance Audits"
      ],
      pricing: "Starting at $8,000",
      timeline: "2-8 weeks",
      technologies: ["Various", "Based on", "Client Needs", "And Current", "Technology", "Stack"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and deliver exceptional digital experiences that drive results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="overflow-hidden border-0 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Service Info */}
                      <div className="lg:col-span-2 p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center">
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                                {service.title}
                              </CardTitle>
                              <CardDescription className="text-lg mt-2">
                                {service.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {service.fullDescription}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>

                      {/* Service Details */}
                      <div className="bg-secondary/30 p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                          {/* Pricing */}
                          <div className="flex items-center space-x-3">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Investment</p>
                              <p className="font-semibold text-foreground">{service.pricing}</p>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Timeline</p>
                              <p className="font-semibold text-foreground">{service.timeline}</p>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <p className="text-sm text-muted-foreground mb-3">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-6">
                          <Button variant="hero" className="w-full group">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results 
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;