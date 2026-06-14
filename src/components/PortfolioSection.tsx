import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
import { BeforeAfterComparison } from "@/components/EnterpriseVisuals";
import { ProjectVisual, type ProjectVisualVariant } from "@/components/ProjectVisual";

type PortfolioPreviewProject = {
  title: string;
  description: string;
  visual: ProjectVisualVariant;
  tags: string[];
  category: string;
  results: string;
  liveUrl: string;
};

const PortfolioSection = () => {
  const projects: PortfolioPreviewProject[] = [
    {
      title: "Ronin - Gaming Audio E-Commerce",
      description: "Advanced e-commerce platform for premium gaming earbuds featuring software-based audio technology with ultra-low latency for gamers.",
      visual: "ronin",
      tags: ["Shopify", "React", "E-Commerce", "Payment Integration"],
      category: "E-Commerce",
      results: "Premium gaming audio brand in Pakistan",
      liveUrl: "https://ronin.pk/"
    },
    {
      title: "Misk Foundation",
      description: "Digital platform for Mohammed Bin Salman Foundation, empowering and connecting young leaders, innovators, and entrepreneurs globally.",
      visual: "misk",
      tags: ["Next.js", "CMS", "Multilingual", "Enterprise"],
      category: "Non-Profit",
      results: "Empowering youth across Saudi Arabia",
      liveUrl: "https://misk.org.sa/en/"
    },
    {
      title: "El Race Contracting",
      description: "Modern construction company website showcasing projects, services, and career opportunities for a leading UAE-based contractor.",
      visual: "elraceWeb",
      tags: ["React", "CMS", "Portfolio", "Responsive Design"],
      category: "Construction",
      results: "Building the future in UAE",
      liveUrl: "https://elrace.com/"
    },
    {
      title: "Saleh Sallom Jewelry",
      description: "Premium luxury jewelry e-commerce platform featuring natural diamonds, lab-grown diamonds, and customized jewelry with secure shopping experience.",
      visual: "jewelry",
      tags: ["Shopify", "E-Commerce", "Luxury", "Payment Gateway"],
      category: "E-Commerce",
      results: "Certified premium jewelry marketplace",
      liveUrl: "https://www.salehsallom.com/"
    },
    {
      title: "El Race Operations App",
      description: "Mobile operations management application for El Race Contracting, streamlining construction project management and field operations.",
      visual: "elraceApp",
      tags: ["React Native", "Mobile App", "Operations", "Project Management"],
      category: "Mobile App",
      results: "10+ downloads, efficient operations",
      liveUrl: "https://play.google.com/store/apps/details?id=com.el_race.app&hl=en"
    },
    {
      title: "Story Hero - AI Bedtime Stories",
      description: "AI-powered mobile app that creates completely unique, personalized bedtime stories with custom characters, genres, and beautiful illustrations.",
      visual: "storyHero",
      tags: ["React Native", "AI", "Mobile App", "Image Generation"],
      category: "Mobile App",
      results: "Magical storytelling experiences",
      liveUrl: "https://storyhero.site/"
    },
    {
      title: "SmartHair - AI Hair Analysis",
      description: "AI-powered hair care app that analyzes your hair from a photo and creates personalized routines based on your unique hair type, porosity, and lifestyle.",
      visual: "smartHair",
      tags: ["React Native", "AI", "Mobile App", "Computer Vision"],
      category: "Mobile App",
      results: "4.8 rating, personalized hair care",
      liveUrl: "https://trysmarthair.com/"
    },
    {
      title: "EchoMood - AI Journaling",
      description: "Emotional journaling app with AI-generated personalized responses, text-to-speech playback, and multiple AI personas for deeper self-awareness.",
      visual: "echoMood",
      tags: ["React Native", "AI", "Mobile App", "Text-to-Speech"],
      category: "Mobile App",
      results: "Premium AI journaling experience",
      liveUrl: "https://echomood.app/"
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
                <ProjectVisual
                  variant={project.visual}
                  title={`${project.title} project visual`}
                  className="transition-transform duration-500 group-hover:scale-105"
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
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    {project.results}
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

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center rounded-2xl border border-border/70 bg-muted/40 p-6 md:p-8 reveal">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Case study method</p>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold text-foreground">
              Every portfolio build is measured against business movement.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We pair interface quality with operational outcomes: faster workflows, clearer analytics,
              higher conversion, stronger automation, and systems your internal team can actually run.
            </p>
          </div>
          <BeforeAfterComparison />
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
