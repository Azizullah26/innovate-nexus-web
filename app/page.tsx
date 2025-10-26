import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import ClientsSlider from "@/components/ClientsSlider"
import PricingSection from "@/components/PricingSection"
import ClientReviewsSection from "@/components/ClientReviewsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSlider />
        <PricingSection />
        <ClientReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-background">AZMA TECH</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Building the future with fullstack development, AI integration, and cutting-edge digital solutions that
                drive business growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Services</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>
                  <a href="#services" className="hover:text-background transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-background transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-background transition-colors">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-background transition-colors">
                    Cloud Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Company</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>
                  <a href="#about" className="hover:text-background transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-background transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2025 AZMA TECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
