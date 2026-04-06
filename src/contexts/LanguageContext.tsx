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

    // Hero
    'hero.title1': 'Transform Your Business with',
    'hero.title2': 'AI-Powered Solutions',
    'hero.subtitle': 'We build intelligent automation, AI agents, and enterprise-grade digital platforms that help UAE businesses scale, optimize, and lead in the digital economy.',
    'hero.cta': 'Book Free Consultation',
    'hero.watchDemo': 'Watch Demo',
    'hero.badge': 'Trusted by UAE Government & Enterprise Clients',
    'hero.projects': 'Projects Delivered',
    'hero.satisfaction': 'Client Satisfaction',
    'hero.support': 'Support Available',

    // Services Section
    'services.badge': 'What We Do',
    'services.heading1': 'Enterprise-Grade',
    'services.heading2': 'Digital Solutions',
    'services.subtitle': 'From AI automation to government integrations — we deliver solutions that transform operations, reduce costs, and accelerate growth for UAE and global enterprises.',

    // AI Automation
    'services.automation.title': 'AI Automation Solutions',
    'services.automation.desc': 'Intelligent workflows and process automation that eliminate manual tasks and boost operational efficiency across your organization.',
    'services.automation.f1': 'Workflow Automation',
    'services.automation.f2': 'Process Optimization',
    'services.automation.f3': 'Intelligent Decision Systems',
    'services.automation.f4': 'Business Optimization',

    // AI Agents
    'services.agents.title': 'AI Agents Development',
    'services.agents.desc': 'Autonomous AI agents and multi-agent systems that make intelligent decisions and execute complex tasks independently.',
    'services.agents.f1': 'Autonomous Agents',
    'services.agents.f2': 'Multi-Agent Systems',
    'services.agents.f3': 'Decision-Making AI',
    'services.agents.f4': 'Task Orchestration',

    // AI Chatbots
    'services.chatbots.title': 'AI Chatbots & Assistants',
    'services.chatbots.desc': 'Intelligent conversational AI for websites, WhatsApp, and omnichannel customer engagement — available 24/7.',
    'services.chatbots.f1': 'Website Chatbots',
    'services.chatbots.f2': 'WhatsApp Automation',
    'services.chatbots.f3': 'Omnichannel Support',
    'services.chatbots.f4': 'Multi-language NLP',

    // Google Business
    'services.google.title': 'Google Business Optimization',
    'services.google.desc': 'Complete Google Business Profile setup, verification, SEO optimization, and automated review management.',
    'services.google.f1': 'Profile Setup & Verification',
    'services.google.f2': 'Local SEO Optimization',
    'services.google.f3': 'Review Automation',
    'services.google.f4': 'Analytics & Insights',

    // CRM & ERP
    'services.crm.title': 'CRM & ERP Solutions',
    'services.crm.desc': 'Custom CRM/ERP systems, Odoo integrations, and end-to-end workflow digitization for enterprise efficiency.',
    'services.crm.f1': 'Custom CRM Development',
    'services.crm.f2': 'Odoo Integration',
    'services.crm.f3': 'Workflow Digitization',
    'services.crm.f4': 'Enterprise Automation',

    // UAE Integrations
    'services.uae.title': 'UAE Integrations',
    'services.uae.desc': 'UAE PASS integration, government API connections, and smart authentication systems built for the UAE digital ecosystem.',
    'services.uae.f1': 'UAE PASS Integration',
    'services.uae.f2': 'Government APIs',
    'services.uae.f3': 'Smart Authentication',
    'services.uae.f4': 'Compliance & Security',

    // Full Stack
    'services.fullstack.title': 'Full Stack Development',
    'services.fullstack.desc': 'Scalable web and mobile applications, robust APIs, and cloud-native solutions built with modern technologies.',
    'services.fullstack.f1': 'Web & Mobile Apps',
    'services.fullstack.f2': 'API Development',
    'services.fullstack.f3': 'Cloud Solutions',
    'services.fullstack.f4': 'Scalable Architecture',

    // AI & Data
    'services.data.title': 'AI & Data Solutions',
    'services.data.desc': 'Predictive analytics, intelligent dashboards, and AI-powered reporting systems that turn data into strategic advantage.',
    'services.data.f1': 'Predictive Analytics',
    'services.data.f2': 'Smart Dashboards',
    'services.data.f3': 'AI Reporting',
    'services.data.f4': 'Data Engineering',

    // Footer
    'footer.description': 'AZMA TECH delivers AI-powered automation, intelligent agents, and enterprise digital solutions for UAE government and corporate clients.',
    'footer.services': 'Solutions',
    'footer.webDev': 'AI Automation',
    'footer.mobileApps': 'AI Agents',
    'footer.aiIntegration': 'UAE Integrations',
    'footer.cloudSolutions': 'CRM & ERP',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.portfolio': 'Portfolio',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': '© 2025 AZMA TECH. All rights reserved.',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All Services',
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

    // Hero
    'hero.title1': 'حوّل أعمالك مع',
    'hero.title2': 'حلول الذكاء الاصطناعي',
    'hero.subtitle': 'نبني الأتمتة الذكية ووكلاء الذكاء الاصطناعي والمنصات الرقمية المؤسسية التي تساعد الشركات الإماراتية على النمو والتحسين والريادة في الاقتصاد الرقمي.',
    'hero.cta': 'احجز استشارة مجانية',
    'hero.watchDemo': 'شاهد العرض',
    'hero.badge': 'موثوق من الحكومة الإماراتية وعملاء المؤسسات',
    'hero.projects': 'مشروع منجز',
    'hero.satisfaction': 'رضا العملاء',
    'hero.support': 'دعم متاح',

    // Services
    'services.badge': 'ماذا نقدم',
    'services.heading1': 'حلول رقمية',
    'services.heading2': 'مؤسسية',
    'services.subtitle': 'من أتمتة الذكاء الاصطناعي إلى التكاملات الحكومية — نقدم حلولاً تحوّل العمليات وتقلل التكاليف وتسرّع النمو.',

    'services.automation.title': 'حلول الأتمتة الذكية',
    'services.automation.desc': 'سير عمل ذكي وأتمتة عمليات تزيل المهام اليدوية وتعزز الكفاءة التشغيلية.',
    'services.automation.f1': 'أتمتة سير العمل',
    'services.automation.f2': 'تحسين العمليات',
    'services.automation.f3': 'أنظمة القرار الذكي',
    'services.automation.f4': 'تحسين الأعمال',

    'services.agents.title': 'تطوير وكلاء الذكاء الاصطناعي',
    'services.agents.desc': 'وكلاء ذكاء اصطناعي مستقلون وأنظمة متعددة الوكلاء تتخذ قرارات ذكية.',
    'services.agents.f1': 'وكلاء مستقلون',
    'services.agents.f2': 'أنظمة متعددة الوكلاء',
    'services.agents.f3': 'ذكاء اصطناعي لاتخاذ القرارات',
    'services.agents.f4': 'تنسيق المهام',

    'services.chatbots.title': 'روبوتات الدردشة والمساعدين',
    'services.chatbots.desc': 'ذكاء اصطناعي محادثي للمواقع وواتساب والدعم متعدد القنوات — متاح على مدار الساعة.',
    'services.chatbots.f1': 'روبوتات المواقع',
    'services.chatbots.f2': 'أتمتة واتساب',
    'services.chatbots.f3': 'دعم متعدد القنوات',
    'services.chatbots.f4': 'معالجة لغوية متعددة',

    'services.google.title': 'تحسين Google Business',
    'services.google.desc': 'إعداد ملف Google Business الكامل والتحقق وتحسين محركات البحث وإدارة المراجعات.',
    'services.google.f1': 'إعداد وتحقق الملف',
    'services.google.f2': 'تحسين SEO المحلي',
    'services.google.f3': 'أتمتة المراجعات',
    'services.google.f4': 'تحليلات ورؤى',

    'services.crm.title': 'حلول CRM و ERP',
    'services.crm.desc': 'أنظمة CRM/ERP مخصصة وتكاملات Odoo ورقمنة سير العمل الشاملة.',
    'services.crm.f1': 'تطوير CRM مخصص',
    'services.crm.f2': 'تكامل Odoo',
    'services.crm.f3': 'رقمنة سير العمل',
    'services.crm.f4': 'أتمتة المؤسسات',

    'services.uae.title': 'تكاملات الإمارات',
    'services.uae.desc': 'تكامل UAE PASS وواجهات برمجة التطبيقات الحكومية وأنظمة المصادقة الذكية.',
    'services.uae.f1': 'تكامل UAE PASS',
    'services.uae.f2': 'واجهات حكومية',
    'services.uae.f3': 'مصادقة ذكية',
    'services.uae.f4': 'الامتثال والأمان',

    'services.fullstack.title': 'تطوير شامل',
    'services.fullstack.desc': 'تطبيقات ويب وجوال قابلة للتوسع وواجهات برمجة قوية وحلول سحابية حديثة.',
    'services.fullstack.f1': 'تطبيقات ويب وجوال',
    'services.fullstack.f2': 'تطوير API',
    'services.fullstack.f3': 'حلول سحابية',
    'services.fullstack.f4': 'بنية قابلة للتوسع',

    'services.data.title': 'حلول الذكاء والبيانات',
    'services.data.desc': 'تحليلات تنبؤية ولوحات معلومات ذكية وتقارير مدعومة بالذكاء الاصطناعي.',
    'services.data.f1': 'تحليلات تنبؤية',
    'services.data.f2': 'لوحات معلومات ذكية',
    'services.data.f3': 'تقارير الذكاء الاصطناعي',
    'services.data.f4': 'هندسة البيانات',

    // Footer
    'footer.description': 'أزما تك تقدم الأتمتة الذكية ووكلاء الذكاء الاصطناعي والحلول الرقمية المؤسسية للحكومة والشركات الإماراتية.',
    'footer.services': 'الحلول',
    'footer.webDev': 'الأتمتة الذكية',
    'footer.mobileApps': 'وكلاء الذكاء الاصطناعي',
    'footer.aiIntegration': 'تكاملات الإمارات',
    'footer.cloudSolutions': 'حلول CRM و ERP',
    'footer.company': 'الشركة',
    'footer.aboutUs': 'من نحن',
    'footer.portfolio': 'أعمالنا',
    'footer.blog': 'المدونة',
    'footer.contact': 'اتصل بنا',
    'footer.rights': '© 2025 أزما تك. جميع الحقوق محفوظة.',

    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض جميع الخدمات',
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
