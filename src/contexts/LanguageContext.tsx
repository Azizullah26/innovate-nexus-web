import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title1': 'Transform Your Vision Into',
    'hero.title2': 'Digital Reality',
    'hero.subtitle': 'We specialize in fullstack development, AI integration, and cutting-edge digital solutions that propel startups and enterprises toward unprecedented growth.',
    'hero.cta': 'Start Your Project',
    'hero.watchDemo': 'Watch Demo',
    'hero.badge': 'Building the Future with AI & Fullstack Solutions',
    'hero.projects': 'Projects Delivered',
    'hero.satisfaction': 'Client Satisfaction',
    'hero.support': 'Support Available',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions tailored to your needs',
    
    // Footer
    'footer.description': 'AZMA TECH specializes in AI solutions, automation, full-stack software development, and intelligent digital transformation that accelerates business innovation.',
    'footer.services': 'Services',
    'footer.webDev': 'Web Development',
    'footer.mobileApps': 'Mobile Apps',
    'footer.aiIntegration': 'AI Integration',
    'footer.cloudSolutions': 'Cloud Solutions',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.portfolio': 'Portfolio',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': '© 2024 AZMA TECH. All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'أعمالنا',
    'nav.about': 'من نحن',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero Section
    'hero.title1': 'حوّل رؤيتك إلى',
    'hero.title2': 'واقع رقمي',
    'hero.subtitle': 'نحن متخصصون في تطوير البرمجيات الشاملة، ودمج الذكاء الاصطناعي، والحلول الرقمية المتطورة التي تدفع الشركات الناشئة والمؤسسات نحو نمو غير مسبوق.',
    'hero.cta': 'ابدأ مشروعك',
    'hero.watchDemo': 'شاهد العرض',
    'hero.badge': 'نبني المستقبل بالذكاء الاصطناعي والحلول الشاملة',
    'hero.projects': 'مشروع منجز',
    'hero.satisfaction': 'رضا العملاء',
    'hero.support': 'دعم متاح',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة مصممة لتلبية احتياجاتك',
    
    // Footer
    'footer.description': 'أزما تك متخصصة في حلول الذكاء الاصطناعي، والأتمتة، وتطوير البرمجيات الشاملة، والتحول الرقمي الذكي الذي يسرّع الابتكار في الأعمال.',
    'footer.services': 'الخدمات',
    'footer.webDev': 'تطوير الويب',
    'footer.mobileApps': 'تطبيقات الجوال',
    'footer.aiIntegration': 'دمج الذكاء الاصطناعي',
    'footer.cloudSolutions': 'حلول السحابة',
    'footer.company': 'الشركة',
    'footer.aboutUs': 'من نحن',
    'footer.portfolio': 'أعمالنا',
    'footer.blog': 'المدونة',
    'footer.contact': 'اتصل بنا',
    'footer.rights': '© 2024 أزما تك. جميع الحقوق محفوظة.',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add/remove RTL class for styling
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
