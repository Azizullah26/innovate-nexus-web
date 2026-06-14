import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
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
  Zap,
  CheckCircle2,
  ShieldCheck,
  Headphones
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import azainLogo from "@/assets/azain-tech-logo.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EnterpriseDashboardMockup } from "@/components/EnterpriseVisuals";

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [currency, setCurrency] = useState<'AED' | 'EUR'>('EUR');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const gulfCountries = ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'];
        if (gulfCountries.includes(data.country_code)) {
          setCurrency('AED');
        } else {
          setCurrency('EUR');
        }
      })
      .catch(() => {
        setCurrency(language === 'ar' ? 'AED' : 'EUR');
      });
  }, [language]);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thank you for reaching out. We'll get back to you within 24 hours with a free consultation.",
      });
      setHasSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly at azizkhanlinkedin@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@azaintech.com",
      description: "Drop us a line anytime",
      gradient: "primary-gradient"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+971509363002",
      description: "Mon-Fri from 8am to 6pm GST",
      gradient: "secondary-gradient"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Dubai",
      description: "Come say hello at our office",
      gradient: "primary-gradient"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "We respond to all inquiries quickly",
      gradient: "secondary-gradient"
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

  const faqs = [
    {
      question: "How quickly can Azain Tech start a project?",
      answer: "Most discovery calls happen within 24 hours. For scoped projects, we typically begin strategy and UX architecture within one business week after requirements are confirmed."
    },
    {
      question: "Do you support UAE PASS and government integrations?",
      answer: "Yes. We design and implement UAE PASS authentication, government API connections, secure OAuth flows, Arabic-first interfaces, and compliance-aware workflows."
    },
    {
      question: "Can you work with our existing website or CRM?",
      answer: "Yes. We can audit your current stack, improve conversion and UX, integrate CRM/ERP systems, or rebuild critical modules while preserving business continuity."
    },
    {
      question: "What happens after launch?",
      answer: "We provide launch monitoring, analytics, documentation, performance tuning, and optional support retainers for iteration, automation, and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-16 md:py-24 bg-foreground">
          <div className="absolute inset-0 dot-bg-dark opacity-70 pointer-events-none" />
          <div className="absolute right-0 top-8 h-64 w-[44vw] bg-gradient-to-l from-primary/18 to-transparent blur-3xl" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Strategy call within 24 hours
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Let's build something <span className="gradient-text-animated">enterprise-ready</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/65 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  Tell us what you want to improve, automate, or launch. We'll map the right product,
                  workflow, and technical path for your team.
                </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-12">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center rounded-xl border border-white/10 bg-white/6 p-3 sm:p-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-[11px] sm:text-xs text-white/50">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              </div>
              <EnterpriseDashboardMockup className="hidden lg:block drop-shadow-2xl" />
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
                  {hasSubmitted && (
                    <div className="mb-6 rounded-xl border border-success/25 bg-success/10 p-4 text-sm text-foreground">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                        <div>
                          <p className="font-semibold">Your request is in our pipeline.</p>
                          <p className="text-muted-foreground">We'll review the brief and respond with next steps within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}
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
                          <option value="">{language === 'ar' ? 'اختر نطاق الميزانية' : 'Select Budget Range'}</option>
                          <option value="5k-15k">{currency === 'AED' ? 'AED 20,000 - AED 60,000' : '€5,000 - €15,000'}</option>
                          <option value="15k-50k">{currency === 'AED' ? 'AED 60,000 - AED 200,000' : '€15,000 - €50,000'}</option>
                          <option value="50k-100k">{currency === 'AED' ? 'AED 200,000 - AED 400,000' : '€50,000 - €100,000'}</option>
                          <option value="100k-250k">{currency === 'AED' ? 'AED 400,000 - AED 1,000,000' : '€100,000 - €250,000'}</option>
                          <option value="250k+">{currency === 'AED' ? '+AED 1,000,000' : '€250,000+'}</option>
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

                    <Button type="submit" variant="hero" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message & Get Free Consultation"}
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
              <Card className="border-0 shadow-lg bg-foreground text-white overflow-hidden">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-2">Enterprise response standard</h4>
                  <p className="text-white/70 mb-5">
                    Every enquiry receives a structured response with recommended next steps, risks, and estimated delivery path.
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: ShieldCheck, label: "Confidential project handling" },
                      { icon: Headphones, label: "Direct technical consultation" },
                      { icon: CheckCircle2, label: "Clear scope before commitment" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-3 text-sm text-white/75">
                        <Icon className="h-4 w-4 text-primary" />
                        {label}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border border-border/70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Dubai Office</CardTitle>
                <CardDescription>Serving UAE government, enterprise, and growth-stage teams.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-border/70 bg-muted/50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-lg primary-gradient flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dubai, United Arab Emirates</p>
                      <p className="text-sm text-muted-foreground">Remote-first delivery across the GCC and global markets</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-background p-3 border border-border/60">
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri, 9:00-18:00 GST</p>
                    </div>
                    <div className="rounded-lg bg-background p-3 border border-border/60">
                      <p className="font-semibold text-foreground">Languages</p>
                      <p className="text-muted-foreground">English and Arabic</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers before we speak.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={azainLogo} alt="Azain Tech" className="h-10 w-auto" />
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
            <p>&copy; 2025 Azain Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
