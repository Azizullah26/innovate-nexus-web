import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSlider from "@/components/ClientsSlider";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import PricingSection from "@/components/PricingSection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import azmaLogo from "@/assets/azma-tech-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSlider />
        <AIFeaturesSection />
        <PricingSection />
        <ClientReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={azmaLogo} alt="AZMA TECH" className="h-12 w-auto bg-blue-50 p-2 rounded-lg" />
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">LinkedIn</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/services" className="hover:text-background transition-colors">{t('footer.webDev')}</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">{t('footer.mobileApps')}</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">{t('footer.aiIntegration')}</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">{t('footer.cloudSolutions')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/about" className="hover:text-background transition-colors">{t('footer.aboutUs')}</a></li>
                <li><a href="/portfolio" className="hover:text-background transition-colors">{t('footer.portfolio')}</a></li>
                <li><a href="/blog" className="hover:text-background transition-colors">{t('footer.blog')}</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;