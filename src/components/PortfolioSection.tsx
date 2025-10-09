import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Ronin - Gaming Audio E-Commerce",
      description: "Advanced e-commerce platform for premium gaming earbuds featuring software-based audio technology with ultra-low latency for gamers.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "React", "E-Commerce", "Payment Integration"],
      category: "E-Commerce",
      results: "Premium gaming audio brand in Pakistan",
      liveUrl: "https://ronin.pk/"
    },
    {
      title: "Misk Foundation",
      description: "Digital platform for Mohammed Bin Salman Foundation, empowering and connecting young leaders, innovators, and entrepreneurs globally.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "CMS", "Multilingual", "Enterprise"],
      category: "Non-Profit",
      results: "Empowering youth across Saudi Arabia",
      liveUrl: "https://misk.org.sa/en/"
    },
    {
      title: "El Race Contracting",
      description: "Modern construction company website showcasing projects, services, and career opportunities for a leading UAE-based contractor.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "CMS", "Portfolio", "Responsive Design"],
      category: "Construction",
      results: "Building the future in UAE",
      liveUrl: "https://elrace.com/"
    },
    {
      title: "Saleh Sallom Jewelry",
      description: "Premium luxury jewelry e-commerce platform featuring natural diamonds, lab-grown diamonds, and customized jewelry with secure shopping experience.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "E-Commerce", "Luxury", "Payment Gateway"],
      category: "E-Commerce",
      results: "Certified premium jewelry marketplace",
      liveUrl: "https://www.salehsallom.com/"
    },
    {
      title: "El Race Operations App",
      description: "Mobile operations management application for El Race Contracting, streamlining construction project management and field operations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Mobile App", "Operations", "Project Management"],
      category: "Mobile App",
      results: "10+ downloads, efficient operations",
      liveUrl: "https://play.google.com/store/apps/details?id=com.el_race.app&hl=en"
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
                <Button size="sm" variant="glass" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
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

                <Button variant="outline" className="w-full group" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
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