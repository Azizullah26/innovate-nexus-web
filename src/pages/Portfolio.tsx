import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, TrendingUp, Star } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "Complete e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
      longDescription: "Built a comprehensive e-commerce platform from the ground up, featuring intelligent product recommendations using machine learning algorithms, real-time inventory tracking, integrated payment processing, and a sophisticated admin dashboard for managing orders, products, and customer data.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL", "Stripe", "AWS"],
      category: "ecommerce",
      client: "RetailTech Solutions",
      duration: "6 months",
      teamSize: "5 developers",
      results: [
        "150% increase in conversion rate",
        "$2M+ in generated sales",
        "40% improvement in user engagement",
        "25% reduction in cart abandonment"
      ],
      features: [
        "AI-powered product recommendations",
        "Real-time inventory management",
        "Advanced analytics dashboard",
        "Multi-payment gateway integration",
        "Responsive mobile design",
        "Admin panel with comprehensive controls"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "TechFlow delivered beyond our expectations. The AI recommendations alone increased our sales by 150%.",
      rating: 5
    },
    {
      id: 2,
      title: "FinTech Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.",
      longDescription: "Developed a full-featured mobile banking application with enterprise-grade security, featuring biometric authentication, real-time transaction processing, budget tracking, investment portfolio management, and AI-powered financial insights.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "TypeScript", "AWS", "Blockchain", "Node.js"],
      category: "fintech",
      client: "SecureBank",
      duration: "8 months",
      teamSize: "7 developers",
      results: [
        "500K+ active users",
        "99.9% application uptime",
        "Zero security breaches",
        "4.8/5 app store rating"
      ],
      features: [
        "Biometric authentication",
        "Real-time transactions",
        "Investment portfolio tracking",
        "Budget management tools",
        "AI-powered insights",
        "Multi-factor security"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "The most secure and user-friendly banking app we've ever developed. Outstanding work from TechFlow.",
      rating: 5
    },
    {
      id: 3,
      title: "Healthcare SaaS Platform",
      description: "Comprehensive healthcare management system with patient portals, telemedicine capabilities, and HIPAA-compliant data handling.",
      longDescription: "Created a complete healthcare ecosystem including patient management, electronic health records, telemedicine consultations, appointment scheduling, billing integration, and comprehensive reporting tools, all while maintaining strict HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Python", "Docker", "Azure", "FHIR", "PostgreSQL"],
      category: "healthcare",
      client: "MedCare Systems",
      duration: "10 months",
      teamSize: "8 developers",
      results: [
        "10+ hospitals using the system",
        "50K+ patients served",
        "30% reduction in admin costs",
        "HIPAA compliance achieved"
      ],
      features: [
        "Electronic health records",
        "Telemedicine consultations",
        "Appointment scheduling",
        "Billing integration",
        "Patient portal",
        "HIPAA compliance"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "TechFlow's expertise in healthcare technology is unmatched. They delivered a world-class system.",
      rating: 5
    },
    {
      id: 4,
      title: "Smart Manufacturing IoT Platform",
      description: "Industrial IoT solution for manufacturing optimization with real-time monitoring, predictive maintenance, and automated reporting.",
      longDescription: "Developed an end-to-end IoT platform for smart manufacturing, featuring real-time equipment monitoring, predictive maintenance algorithms, automated quality control, production optimization, and comprehensive analytics dashboards.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "IoT", "Machine Learning", "MongoDB", "InfluxDB"],
      category: "iot",
      client: "IndusTech Manufacturing",
      duration: "7 months",
      teamSize: "6 developers",
      results: [
        "40% increase in efficiency",
        "$5M annual cost savings",
        "60% reduction in downtime",
        "Real-time monitoring of 500+ machines"
      ],
      features: [
        "Real-time equipment monitoring",
        "Predictive maintenance",
        "Quality control automation",
        "Production optimization",
        "Energy consumption tracking",
        "Custom analytics dashboards"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "The IoT platform transformed our manufacturing process. Incredible ROI and performance improvements.",
      rating: 5
    },
    {
      id: 5,
      title: "EdTech Learning Management System",
      description: "Comprehensive learning platform with video streaming, interactive content, progress tracking, and AI-powered personalization.",
      longDescription: "Built a state-of-the-art learning management system featuring video streaming, interactive course content, student progress tracking, AI-powered content recommendations, virtual classrooms, and comprehensive assessment tools.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Laravel", "WebRTC", "Redis", "Elasticsearch", "AWS"],
      category: "education",
      client: "EduPrime",
      duration: "9 months",
      teamSize: "7 developers",
      results: [
        "100K+ active students",
        "95% course completion rate",
        "50% improvement in learning outcomes",
        "Deployed in 20+ countries"
      ],
      features: [
        "HD video streaming",
        "Interactive content",
        "AI-powered recommendations",
        "Virtual classrooms",
        "Progress analytics",
        "Mobile learning app"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "TechFlow created the most engaging learning platform we've seen. Student satisfaction is at an all-time high.",
      rating: 5
    },
    {
      id: 6,
      title: "Real Estate Marketplace Platform",
      description: "Modern property marketplace with virtual tours, AI-powered matching, integrated CRM, and comprehensive analytics.",
      longDescription: "Developed a comprehensive real estate marketplace featuring virtual property tours, AI-powered property matching, integrated CRM for agents, mortgage calculator, market analytics, and mobile-first responsive design.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "GraphQL", "Prisma", "Mapbox", "Stripe", "Next.js"],
      category: "realestate",
      client: "PropertyPro",
      duration: "8 months",
      teamSize: "6 developers",
      results: [
        "$100M+ in property listings",
        "80% faster property sales",
        "200+ real estate agents onboarded",
        "5x increase in user engagement"
      ],
      features: [
        "Virtual property tours",
        "AI-powered matching",
        "Integrated CRM",
        "Market analytics",
        "Mortgage calculator",
        "Agent dashboard"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      testimonial: "The platform revolutionized how we sell properties. Sales velocity increased dramatically.",
      rating: 5
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "fintech", name: "FinTech" },
    { id: "healthcare", name: "Healthcare" },
    { id: "iot", name: "IoT" },
    { id: "education", name: "Education" },
    { id: "realestate", name: "Real Estate" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful projects that have transformed businesses across various industries, 
              delivering exceptional results and driving growth.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "hero" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="min-w-0"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-0 shadow-2xl group">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="glass" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="glass" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {categories.find(c => c.id === project.category)?.name}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Project Stats */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-lg">
                        <div className="text-center">
                          <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-semibold text-sm">{project.duration}</p>
                        </div>
                        <div className="text-center">
                          <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Team Size</p>
                          <p className="font-semibold text-sm">{project.teamSize}</p>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Client</p>
                          <p className="font-semibold text-sm text-primary">{project.client}</p>
                        </div>
                      </div>

                      {/* Key Results */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 text-success mr-2" />
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-success rounded-full mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-sm italic text-muted-foreground mb-2">
                          "{project.testimonial}"
                        </p>
                        <p className="text-xs font-medium text-primary">- {project.client}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3 pt-4">
                        <Button variant="hero" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Live Site
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful clients and transform your business with 
              cutting-edge technology solutions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;