import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  ArrowRight,
  Globe,
  Users,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@techflow.dev",
      description: "Drop us a line anytime",
      gradient: "primary-gradient"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
      gradient: "secondary-gradient"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Come say hello at our office",
      gradient: "electric-gradient"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "We respond to all inquiries quickly",
      gradient: "silver-gradient"
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "30-minute strategy session to discuss your project",
      action: "Book Now",
      gradient: "primary-gradient"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "See our solutions and previous work in action",
      action: "Schedule",
      gradient: "secondary-gradient"
    },
    {
      icon: Users,
      title: "Team Meeting",
      description: "Meet with our development team directly",
      action: "Arrange",
      gradient: "electric-gradient"
    }
  ];

  const stats = [
    { icon: Globe, label: "Projects Delivered", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "80+" },
    { icon: Zap, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Build Something <span className="gradient-text">Extraordinary</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to transform your vision into reality? Connect with our expert team and 
                discover how we can accelerate your digital transformation journey.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-bold text-foreground">Start Your Project</CardTitle>
                  <CardDescription className="text-lg">
                    Tell us about your vision and we'll provide a comprehensive proposal with timeline and pricing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-base font-semibold">Company</Label>
                        <Input 
                          id="company"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-base font-semibold">Project Timeline</Label>
                        <select 
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full mt-2 h-12 px-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                        >
                          <option value="">Select Timeline</option>
                          <option value="urgent">ASAP (Rush Project)</option>
                          <option value="1-2months">1-2 Months</option>
                          <option value="3-6months">3-6 Months</option>
                          <option value="6months+">6+ Months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="project" className="text-base font-semibold">Project Type *</Label>
                        <select 
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                          className="w-full mt-2 h-12 px-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                        >
                          <option value="">Select Project Type</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">Mobile Application</option>
                          <option value="ai-integration">AI Integration</option>
                          <option value="cloud-migration">Cloud Migration</option>
                          <option value="fullstack">Full-Stack Development</option>
                          <option value="consulting">Digital Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-base font-semibold">Investment Range</Label>
                        <select 
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full mt-2 h-12 px-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k+">$250,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Project Details *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your project vision, key requirements, target audience, and any specific features you need. The more details you provide, the better we can tailor our proposal to your needs."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-2 text-base"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full h-14 text-lg">
                      Send Message & Get Free Consultation
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Get In Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to connect with our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{info.title}</h4>
                          <p className="text-secondary font-medium text-base">{info.details}</p>
                          <p className="text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Quick Actions</h3>
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group electric-glow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 ${action.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground text-lg">{action.title}</h4>
                            <p className="text-muted-foreground">{action.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg primary-gradient text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-2">Stay Connected</h4>
                  <p className="text-white/80 mb-4">
                    Subscribe to get the latest tech insights, project updates, and exclusive offers.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12"
                    />
                    <Button variant="glass" size="sm" className="w-full h-10">
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-background">TechFlow</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Building the future with fullstack development, AI integration, and 
                cutting-edge digital solutions that drive business growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">LinkedIn</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Services</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/services" className="hover:text-background transition-colors">Web Development</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">Mobile Apps</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">AI Integration</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Company</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/about" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="/portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
                <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;