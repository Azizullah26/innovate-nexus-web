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
      title: "Ronin - Gaming Audio E-Commerce",
      description: "Advanced e-commerce platform for premium gaming earbuds featuring software-based audio technology with ultra-low latency.",
      longDescription: "Developed a comprehensive e-commerce platform for Ronin, a leading gaming audio brand in Pakistan. The platform features advanced product showcasing, seamless payment integration, product customization options, and an optimized checkout experience. The site showcases cutting-edge gaming earbuds with features like 28ms ultra-low latency, fidget spinner designs, and hybrid ANC technology.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "React", "E-Commerce", "Payment Integration", "Responsive Design"],
      category: "ecommerce",
      client: "Ronin Audio",
      duration: "4 months",
      teamSize: "4 developers",
      results: [
        "Premium gaming audio brand",
        "Multiple product lines launched",
        "Seamless shopping experience",
        "Mobile-optimized platform"
      ],
      features: [
        "Product customization",
        "Multi-currency support",
        "Advanced product filtering",
        "Secure payment gateway",
        "Order tracking system",
        "Customer reviews integration"
      ],
      liveUrl: "https://ronin.pk/",
      githubUrl: "https://github.com",
      testimonial: "A premium e-commerce experience for gaming enthusiasts with cutting-edge audio products.",
      rating: 5
    },
    {
      id: 2,
      title: "Misk Foundation",
      description: "Digital platform for Mohammed Bin Salman Foundation, empowering young leaders, innovators, and entrepreneurs globally.",
      longDescription: "Created a comprehensive digital platform for Misk Foundation, one of Saudi Arabia's leading non-profit organizations. The platform showcases various initiatives including the Misk Global Forum, ilmi science initiative, and numerous youth empowerment programs. Features include multilingual support (Arabic/English), event management, program showcases, and a media center for news and updates.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "CMS", "Multilingual", "Enterprise", "Responsive Design"],
      category: "nonprofit",
      client: "Misk Foundation",
      duration: "6 months",
      teamSize: "6 developers",
      results: [
        "Empowering youth across Saudi Arabia",
        "Multiple program showcases",
        "Bilingual platform (AR/EN)",
        "Comprehensive media center"
      ],
      features: [
        "Multilingual content management",
        "Event management system",
        "Program showcases",
        "Media center integration",
        "News and updates portal",
        "Careers portal"
      ],
      liveUrl: "https://misk.org.sa/en/",
      githubUrl: "https://github.com",
      testimonial: "A powerful platform empowering the next generation of Saudi leaders and innovators.",
      rating: 5
    },
    {
      id: 3,
      title: "El Race Contracting",
      description: "Modern construction company website showcasing projects, services, and career opportunities for a leading UAE-based contractor.",
      longDescription: "Designed and developed a professional website for El Race Contracting, a prominent construction company in the UAE. The platform features comprehensive service showcases, project portfolio, career opportunities, and detailed company information. The site emphasizes quality, innovation, and sustainability in construction, with bilingual support (English/Arabic) and a modern, professional design.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "CMS", "Portfolio", "Responsive Design", "Bilingual"],
      category: "construction",
      client: "El Race Contracting",
      duration: "3 months",
      teamSize: "3 developers",
      results: [
        "Professional online presence",
        "Comprehensive service showcase",
        "Project portfolio display",
        "Career portal integration"
      ],
      features: [
        "Service showcase",
        "Project portfolio",
        "Blog and news section",
        "Career opportunities portal",
        "Contact forms",
        "Bilingual support (EN/AR)"
      ],
      liveUrl: "https://elrace.com/",
      githubUrl: "https://github.com",
      testimonial: "Building the future and shaping the skyline of the UAE with excellence.",
      rating: 5
    },
    {
      id: 4,
      title: "Saleh Sallom Jewelry",
      description: "Premium luxury jewelry e-commerce platform featuring natural diamonds, lab-grown diamonds, and customized jewelry.",
      longDescription: "Built a sophisticated e-commerce platform for Saleh Sallom, a premium jewelry brand specializing in natural and lab-grown diamonds. The platform features secure shopping with certificate verification, maintenance warranty, free shipping, and comprehensive product showcases including diamond jewelry, opal jewelry, precious stones, and customized pieces. Integrated with advanced payment gateways and featuring an elegant, luxury-focused design.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      tags: ["Shopify", "E-Commerce", "Luxury", "Payment Gateway", "Certificate Management"],
      category: "ecommerce",
      client: "Saleh Sallom",
      duration: "5 months",
      teamSize: "5 developers",
      results: [
        "Premium jewelry marketplace",
        "Certificate verification system",
        "Secure payment integration",
        "Luxury shopping experience"
      ],
      features: [
        "Certificate verification",
        "Advanced product filtering",
        "Secure payment gateway",
        "Maintenance warranty tracking",
        "Store locator",
        "Live chat support"
      ],
      liveUrl: "https://www.salehsallom.com/",
      githubUrl: "https://github.com",
      testimonial: "Premium luxury jewelry experience with certified quality and secure shopping.",
      rating: 5
    },
    {
      id: 5,
      title: "El Race Operations App",
      description: "Mobile operations management application for construction project management and field operations.",
      longDescription: "Developed a comprehensive mobile operations application for El Race Contracting to streamline construction project management and field operations. The app enables real-time project tracking, team management, documentation, and communication between field teams and management. Features include offline capabilities, photo documentation, task management, and progress reporting.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Mobile App", "Operations", "Project Management", "Offline Support"],
      category: "mobile",
      client: "El Race Contracting",
      duration: "4 months",
      teamSize: "4 developers",
      results: [
        "10+ downloads",
        "Streamlined operations",
        "Real-time project tracking",
        "Improved field communication"
      ],
      features: [
        "Real-time project tracking",
        "Task management",
        "Photo documentation",
        "Offline capabilities",
        "Team communication",
        "Progress reporting"
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.el_race.app&hl=en",
      githubUrl: "https://github.com",
      testimonial: "Efficient construction operations management at your fingertips.",
      rating: 5
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "nonprofit", name: "Non-Profit" },
    { id: "construction", name: "Construction" },
    { id: "mobile", name: "Mobile Apps" }
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