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
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@azaintech.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Project Enquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          _captcha: 'false',
          _template: 'table',
          Name: formData.name,
          Email: formData.email,
          Company: formData.company || '—',
          'Project Type': formData.project || '—',
          Budget: formData.budget || '—',
          Message: formData.message,
        }),
      });

      const json = await response.json();

      if (response.ok && json.success === 'true') {
        toast({
          title: t('contact.toast.title'),
          description: t('contact.toast.desc'),
        });
        setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' });
      } else {
        throw new Error('Submission rejected');
      }
    } catch {
      toast({
        title: t('contact.toast.errTitle'),
        description: t('contact.toast.errDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail,    titleKey: 'contact.info.email.title', details: "info@azaintech.com",  descKey: 'contact.info.email.desc' },
    { icon: Phone,   titleKey: 'contact.info.phone.title', details: "+971509363002",        descKey: 'contact.info.phone.desc' },
    { icon: MapPin,  titleKey: 'contact.info.map.title',   details: "Dubai UAE",            descKey: 'contact.info.map.desc' },
    { icon: Clock,   titleKey: 'contact.info.time.title',  details: "< 24 Hours",           descKey: 'contact.info.time.desc' },
  ];

  const quickActions = [
    { icon: MessageSquare, titleKey: 'contact.action.consult.title', descKey: 'contact.action.consult.desc', btnKey: 'contact.action.consult.btn' },
    { icon: Calendar,      titleKey: 'contact.action.demo.title',    descKey: 'contact.action.demo.desc',    btnKey: 'contact.action.demo.btn' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.heading1')} <span className="gradient-text">{t('contact.heading2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">{t('contact.form.heading')}</CardTitle>
                <CardDescription>
                  {t('contact.form.subheading')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t('contact.form.namePh')}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={t('contact.form.companyPh')}
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">{t('contact.form.budget')}</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-2 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">{t('contact.form.budgetPh')}</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project">{t('contact.form.project')}</Label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t('contact.form.projectPh')}</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="consulting">Digital Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.form.messagePh')}
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{t('contact.info.heading')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t(info.titleKey)}</h4>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{t(info.descKey)}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{t(action.titleKey)}</h4>
                          <p className="text-muted-foreground text-sm">{t(action.descKey)}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Newsletter */}
            <Card className="border-0 shadow-lg primary-gradient text-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">{t('contact.news.title')}</h4>
                <p className="text-white/80 text-sm mb-4">{t('contact.news.sub')}</p>
                <div className="flex space-x-2">
                  <Input
                    placeholder={t('contact.news.ph')}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button variant="glass" size="sm">
                    {t('contact.news.btn')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;