import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Bot, 
  MessageSquare, 
  MapPin,
  Database as DatabaseIcon,
  Shield,
  Code2,
  Brain,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t, direction } = useLanguage();

  const services = [
    {
      icon: Zap,
      titleKey: 'services.automation.title',
      descKey: 'services.automation.desc',
      features: ['services.automation.f1', 'services.automation.f2', 'services.automation.f3', 'services.automation.f4']
    },
    {
      icon: Bot,
      titleKey: 'services.agents.title',
      descKey: 'services.agents.desc',
      features: ['services.agents.f1', 'services.agents.f2', 'services.agents.f3', 'services.agents.f4']
    },
    {
      icon: MessageSquare,
      titleKey: 'services.chatbots.title',
      descKey: 'services.chatbots.desc',
      features: ['services.chatbots.f1', 'services.chatbots.f2', 'services.chatbots.f3', 'services.chatbots.f4']
    },
    {
      icon: MapPin,
      titleKey: 'services.google.title',
      descKey: 'services.google.desc',
      features: ['services.google.f1', 'services.google.f2', 'services.google.f3', 'services.google.f4']
    },
    {
      icon: DatabaseIcon,
      titleKey: 'services.crm.title',
      descKey: 'services.crm.desc',
      features: ['services.crm.f1', 'services.crm.f2', 'services.crm.f3', 'services.crm.f4']
    },
    {
      icon: Shield,
      titleKey: 'services.uae.title',
      descKey: 'services.uae.desc',
      features: ['services.uae.f1', 'services.uae.f2', 'services.uae.f3', 'services.uae.f4']
    },
    {
      icon: Code2,
      titleKey: 'services.fullstack.title',
      descKey: 'services.fullstack.desc',
      features: ['services.fullstack.f1', 'services.fullstack.f2', 'services.fullstack.f3', 'services.fullstack.f4']
    },
    {
      icon: Brain,
      titleKey: 'services.data.title',
      descKey: 'services.data.desc',
      features: ['services.data.f1', 'services.data.f2', 'services.data.f3', 'services.data.f4']
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 reveal">
            ⚡ {t('services.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 reveal">
            {t('services.heading1')} <span className="gradient-text">{t('services.heading2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto reveal">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group widget-interactive reveal shadow-lg hover:bg-card-hover relative overflow-hidden"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {t(service.descKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-5">
                    {service.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" style={{ marginInlineEnd: '0.75rem' }} />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group/btn text-sm press-effect btn-arrow">
                    {t('common.learnMore')}
                    <ArrowRight data-arrow className={`h-4 w-4 ${direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <Button variant="hero" size="lg" className="press-effect btn-arrow" asChild>
            <a href="/services">{t('common.viewAll')} <ArrowRight data-arrow className="h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
