import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL", "Stripe"],
      category: "E-Commerce",
      results: "+150% conversion rate, $2M+ in sales"
    },
    {
      title: "FinTech Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "TypeScript", "AWS", "Blockchain"],
      category: "FinTech",
      results: "500K+ active users, 99.9% uptime"
    },
    {
      title: "Healthcare SaaS Platform",
      description: "Comprehensive healthcare management system with patient portals, telemedicine capabilities, and HIPAA-compliant data handling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Python", "Docker", "Azure", "FHIR"],
      category: "Healthcare",
      results: "10+ hospitals, 50K+ patients served"
    },
    {
      title: "Smart Manufacturing IoT",
      description: "Industrial IoT solution for manufacturing optimization with real-time monitoring, predictive maintenance, and automated reporting.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "IoT", "Machine Learning", "MongoDB"],
      category: "IoT",
      results: "40% efficiency increase, $5M cost savings"
    },
    {
      title: "EdTech Learning Management",
      description: "Comprehensive learning platform with video streaming, interactive content, progress tracking, and AI-powered personalization.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Laravel", "WebRTC", "Redis", "Elasticsearch"],
      category: "Education",
      results: "100K+ students, 95% completion rate"
    },
    {
      title: "Real Estate Marketplace",
      description: "Modern property marketplace with virtual tours, AI-powered matching, integrated CRM, and comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "GraphQL", "Prisma", "Mapbox", "Stripe"],
      category: "Real Estate",
      results: "$100M+ in listings, 80% faster sales"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing successful projects that have transformed businesses and delivered 
            exceptional results across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-on-hover border-0 shadow-lg"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="glass">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="glass">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {project.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-4 p-3 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm font-medium text-success-foreground">
                    📈 {project.results}
                  </p>
                </div>

                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="/portfolio">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;