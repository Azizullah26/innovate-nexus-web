import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import azmaLogo from "@/assets/azma-tech-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.portfolio'), path: "/portfolio" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.blog'), path: "/blog" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const NavLinks = ({ mobile = false, onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={onClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            location.pathname === item.path
              ? "text-primary"
              : "text-muted-foreground",
            mobile && "block py-2 px-4 text-base"
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={azmaLogo} alt="AZMA TECH" className="h-8 sm:h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLinks />
          </div>

          {/* Desktop CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">{t('nav.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks mobile onClick={() => setIsOpen(false)} />
                <div className="pt-4 space-y-4">
                  <LanguageSwitcher />
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      {t('nav.getStarted')}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;