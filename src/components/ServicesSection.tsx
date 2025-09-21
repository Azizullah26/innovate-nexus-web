import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Brain, 
  Cloud, 
  Users, 
  Smartphone, 
  Database,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Fullstack Web Development",
      description: "End-to-end web solutions using React, Node.js, and modern frameworks. We build scalable, responsive applications that deliver exceptional user experiences.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Integrate cutting-edge AI solutions to automate processes, enhance user experiences, and unlock valuable insights from your data.",
      features: ["ChatGPT Integration", "Computer Vision", "Predictive Analytics", "Custom AI Models"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and DevOps solutions that ensure your applications run smoothly and securely at any scale.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Comprehensive data architecture, analytics, and visualization solutions that transform raw data into actionable business intelligence.",
      features: ["Database Architecture", "Data Analytics", "Business Intelligence", "Real-time Processing"]
    },
    {
      icon: Users,
      title: "Digital Consulting",
      description: "Strategic technology consulting to help you navigate digital transformation and optimize your technology stack for maximum ROI.",
      features: ["Tech Strategy", "Digital Transformation", "Performance Optimization", "Security Audits"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and deliver exceptional digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-on-hover border-0 shadow-lg hover:bg-card-hover"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="/services">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;