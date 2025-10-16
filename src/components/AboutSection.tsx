import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering innovative technology solutions that drive real business results and create lasting value."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends and continuously adopt cutting-edge tools to give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team, ensuring transparent communication and aligned goals."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality, security, and performance across all our projects and deliverables."
    }
  ];

  const team = [
    {
      name: "Aziz Ullah",
      role: "Founder & CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      expertise: ["Full-stack Development", "AI/ML", "System Architecture"]
    },
    {
      name: "Muhammad Jawad",
      role: "Odoo Developer ERP",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      expertise: ["Odoo ERP", "Python", "Business Solutions"]
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      expertise: ["Cloud Infrastructure", "Docker/K8s", "CI/CD"]
    },
    {
      name: "Emily Park",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      expertise: ["Machine Learning", "Data Science", "Python/TensorFlow"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">TechFlow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Founded in 2020, we're a passionate team of developers, designers, and innovators 
            dedicated to building the future through cutting-edge technology solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      What started as a small team of passionate developers has grown into a 
                      full-service technology consultancy. We've helped over 100 companies 
                      transform their digital presence and achieve unprecedented growth through 
                      innovative technology solutions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Our expertise spans across fullstack development, AI integration, cloud 
                      infrastructure, and digital transformation strategies. We pride ourselves 
                      on staying at the forefront of technology trends and delivering solutions 
                      that not only meet today's needs but anticipate tomorrow's challenges.
                    </p>
                    <Button variant="outline">Learn More About Us</Button>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 primary-gradient rounded-lg flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">3+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 animate-scale-on-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Join Our Journey</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;