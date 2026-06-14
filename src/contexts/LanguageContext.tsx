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
    'footer.description': 'Azain Tech delivers AI-powered automation, intelligent agents, and enterprise digital solutions for UAE government and corporate clients.',
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
    'footer.rights': '© 2025 Azain Tech. All rights reserved.',

    // Services flow steps
    'services.flow.s1.title': 'Discover',
    'services.flow.s1.desc': 'Deep-dive into your goals',
    'services.flow.s2.title': 'Design',
    'services.flow.s2.desc': 'Architect the best solution',
    'services.flow.s3.title': 'Build',
    'services.flow.s3.desc': 'Agile, continuous delivery',
    'services.flow.s4.title': 'Launch',
    'services.flow.s4.desc': 'Deploy, monitor and scale',
    'services.flow.label': 'Built for public sector, growth teams, and enterprise operators',

    // About Section
    'about.badge': 'About Us',
    'about.heading.pre': 'About',
    'about.heading': 'About Azain Tech',
    'about.subtitle': "Founded in 2020, we're a passionate team of developers, designers, and AI specialists dedicated to building the future through cutting-edge technology solutions.",
    'about.stat.projects': 'Projects Delivered',
    'about.stat.clients': 'Global Clients',
    'about.stat.countries': 'Countries Served',
    'about.stat.satisfaction': 'Satisfaction Rate',
    'about.story.heading': 'Our Story',
    'about.story.p1': "What started as a small team of passionate developers has grown into a full-service AI technology consultancy. We've helped over 100 companies transform their digital presence and achieve unprecedented growth.",
    'about.story.p2': "Our expertise spans fullstack development, AI integration, cloud infrastructure, and digital transformation. We stay at the forefront of technology to deliver solutions that meet today's needs and anticipate tomorrow's challenges.",
    'about.story.b1': 'UAE-based, globally delivered',
    'about.story.b2': 'Arabic & English speaking team',
    'about.story.b3': 'UAE PASS certified integrators',
    'about.story.b4': 'Agile, transparent delivery',
    'about.story.btn': 'Learn More',
    'about.timeline.0.title': 'Founded',
    'about.timeline.0.desc': 'Started as a lean dev team focused on UAE digital transformation.',
    'about.timeline.1.title': 'First 20 Clients',
    'about.timeline.1.desc': 'Expanded to serve SMEs across Dubai and Abu Dhabi.',
    'about.timeline.2.title': 'AI Division Launched',
    'about.timeline.2.desc': 'Dedicated AI & ML team building chatbots, agents, and NLP solutions.',
    'about.timeline.3.title': 'International Reach',
    'about.timeline.3.desc': 'Clients across Europe, GCC, and South Asia. 100+ projects milestone.',
    'about.timeline.4.title': 'UAE PASS Partner',
    'about.timeline.4.desc': "Certified integrators for UAE's national digital identity platform.",
    'about.timeline.5.title': 'AI-First Agency',
    'about.timeline.5.desc': 'Full pivot to AI-first solutions — automation, LLMs, and cloud AI.',
    'about.values.heading': 'Our Core Values',
    'about.values.0.title': 'Mission-Driven',
    'about.values.0.desc': 'Delivering technology solutions that create lasting, measurable value.',
    'about.values.1.title': 'Innovation First',
    'about.values.1.desc': 'Continuously adopting cutting-edge tools to keep clients ahead.',
    'about.values.2.title': 'Client-Centric',
    'about.values.2.desc': 'We work as an extension of your team with full transparency.',
    'about.values.3.title': 'Quality Excellence',
    'about.values.3.desc': 'Highest standards in code quality, security, and performance.',
    'about.team.heading': 'Meet the Team',
    'about.cta': 'Join Our Journey',

    // AI Features Section
    'ai.badge': 'AI-Powered Solutions',
    'ai.heading1': 'Supercharge Your Business',
    'ai.heading2': 'with AI',
    'ai.subtitle': 'From intelligent automation to full-stack development — we build the technology that drives your growth.',
    'ai.tab.all': 'All Capabilities',
    'ai.tab.ai': 'AI & ML',
    'ai.tab.dev': 'Development',
    'ai.tab.cloud': 'Cloud & Data',
    'ai.tab.uae': 'UAE Integrations',
    'ai.cta.heading': 'Ready to build something extraordinary?',
    'ai.cta.sub': "Let's discuss your project and find the right AI solution.",
    'ai.cta.btn': 'Start a Project →',

    // Contact Section
    'contact.heading1': "Let's Build Something",
    'contact.heading2': 'Amazing',
    'contact.subtitle': "Ready to transform your idea into reality? Get in touch with our team and let's discuss how we can help accelerate your business growth.",
    'contact.form.heading': 'Start Your Project',
    'contact.form.subheading': "Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.",
    'contact.form.name': 'Full Name *',
    'contact.form.namePh': 'John Doe',
    'contact.form.email': 'Email Address *',
    'contact.form.company': 'Company',
    'contact.form.companyPh': 'Company Name',
    'contact.form.budget': 'Project Budget',
    'contact.form.budgetPh': 'Select Budget Range',
    'contact.form.project': 'Project Type',
    'contact.form.projectPh': 'Select Project Type',
    'contact.form.message': 'Project Details *',
    'contact.form.messagePh': 'Tell us about your project, timeline, and any specific requirements...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending…',
    'contact.info.heading': 'Get In Touch',
    'contact.info.email.title': 'Email Us',
    'contact.info.email.desc': 'Drop us a line anytime',
    'contact.info.phone.title': 'Call Us',
    'contact.info.phone.desc': 'Mon-Fri from 8am to 5pm',
    'contact.info.map.title': 'Visit Us',
    'contact.info.map.desc': 'Come say hello at our office',
    'contact.info.time.title': 'Response Time',
    'contact.info.time.desc': 'We respond to all inquiries quickly',
    'contact.action.consult.title': 'Free Consultation',
    'contact.action.consult.desc': '30-minute strategy session',
    'contact.action.consult.btn': 'Book Now',
    'contact.action.demo.title': 'Schedule Demo',
    'contact.action.demo.desc': 'See our solutions in action',
    'contact.action.demo.btn': 'Schedule',
    'contact.news.title': 'Stay Updated',
    'contact.news.sub': 'Get the latest tech insights and industry trends delivered to your inbox.',
    'contact.news.ph': 'Enter your email',
    'contact.news.btn': 'Subscribe',
    'contact.toast.title': 'Message Sent!',
    'contact.toast.desc': "Thank you! We'll get back to you within 24 hours.",
    'contact.toast.errTitle': 'Error',
    'contact.toast.errDesc': 'Failed to send message. Please try again.',

    // Reviews Section
    'reviews.heading1': 'Trusted by Clients',
    'reviews.heading2': 'Worldwide',
    'reviews.subtitle': 'From Europe to the Middle East, businesses trust us to deliver exceptional digital solutions',
    'reviews.stat.projects': 'Projects Delivered',
    'reviews.stat.clients': 'Global Clients',
    'reviews.stat.countries': 'Countries Served',
    'reviews.stat.satisfaction': 'Client Satisfaction',

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
    'footer.description': 'أزاين تك تقدم الأتمتة الذكية ووكلاء الذكاء الاصطناعي والحلول الرقمية المؤسسية للحكومة والشركات الإماراتية.',
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
    'footer.rights': '© 2025 أزاين تك. جميع الحقوق محفوظة.',

    // Services flow steps
    'services.flow.s1.title': 'الاستكشاف',
    'services.flow.s1.desc': 'نتعمق في فهم أهدافك',
    'services.flow.s2.title': 'التصميم',
    'services.flow.s2.desc': 'نصمم الحل الأمثل',
    'services.flow.s3.title': 'البناء',
    'services.flow.s3.desc': 'تسليم رشيق ومستمر',
    'services.flow.s4.title': 'الإطلاق',
    'services.flow.s4.desc': 'النشر والمراقبة والتوسع',
    'services.flow.label': 'مُصمَّم للقطاع الحكومي وفرق النمو ومشغلي المؤسسات',

    // About Section
    'about.badge': 'من نحن',
    'about.heading.pre': 'حول',
    'about.heading': 'حول أزاين تك',
    'about.subtitle': 'تأسسنا عام 2020، نحن فريق متحمس من المطورين والمصممين ومتخصصي الذكاء الاصطناعي نكرّس جهودنا لبناء المستقبل بأحدث الحلول التقنية.',
    'about.stat.projects': 'مشروع منجز',
    'about.stat.clients': 'عميل عالمي',
    'about.stat.countries': 'دولة نخدمها',
    'about.stat.satisfaction': 'معدل الرضا',
    'about.story.heading': 'قصتنا',
    'about.story.p1': 'ما بدأ كفريق صغير من المطورين المتحمسين تحوّل إلى شركة استشارات تقنية متكاملة للذكاء الاصطناعي. ساعدنا أكثر من 100 شركة على تحويل حضورها الرقمي وتحقيق نمو غير مسبوق.',
    'about.story.p2': 'تمتد خبرتنا لتشمل التطوير الشامل وتكامل الذكاء الاصطناعي والبنية التحتية السحابية والتحول الرقمي. نواكب أحدث التقنيات لنقدم حلولاً تلبي احتياجات اليوم وتستشرف تحديات الغد.',
    'about.story.b1': 'مقرنا الإمارات، نخدم العالم',
    'about.story.b2': 'فريق يتحدث العربية والإنجليزية',
    'about.story.b3': 'شركاء معتمدون لـ UAE PASS',
    'about.story.b4': 'تسليم رشيق وشفاف',
    'about.story.btn': 'اعرف المزيد',
    'about.timeline.0.title': 'التأسيس',
    'about.timeline.0.desc': 'بدأنا كفريق تطوير صغير يركز على التحول الرقمي في الإمارات.',
    'about.timeline.1.title': 'أول 20 عميل',
    'about.timeline.1.desc': 'توسعنا لخدمة الشركات الصغيرة والمتوسطة في دبي وأبوظبي.',
    'about.timeline.2.title': 'إطلاق قسم الذكاء الاصطناعي',
    'about.timeline.2.desc': 'فريق متخصص في الذكاء الاصطناعي يبني روبوتات الدردشة والوكلاء وحلول معالجة اللغة.',
    'about.timeline.3.title': 'الوصول الدولي',
    'about.timeline.3.desc': 'عملاء في أوروبا ودول الخليج وجنوب آسيا. إنجاز أكثر من 100 مشروع.',
    'about.timeline.4.title': 'شريك UAE PASS',
    'about.timeline.4.desc': 'معتمدون رسمياً لتكامل منصة الهوية الرقمية الوطنية الإماراتية.',
    'about.timeline.5.title': 'وكالة الذكاء الاصطناعي أولاً',
    'about.timeline.5.desc': 'تحول كامل نحو حلول الذكاء الاصطناعي — الأتمتة، نماذج اللغة الكبيرة، والذكاء السحابي.',
    'about.values.heading': 'قيمنا الجوهرية',
    'about.values.0.title': 'نحو رسالة واضحة',
    'about.values.0.desc': 'نقدم حلولاً تقنية تُحدث أثراً ملموساً ودائماً.',
    'about.values.1.title': 'الابتكار أولاً',
    'about.values.1.desc': 'نتبنى باستمرار أحدث الأدوات لنُبقي عملاءنا في المقدمة.',
    'about.values.2.title': 'العميل في المركز',
    'about.values.2.desc': 'نعمل كامتداد لفريقك بشفافية تامة.',
    'about.values.3.title': 'التميز في الجودة',
    'about.values.3.desc': 'أعلى المعايير في جودة الكود والأمان والأداء.',
    'about.team.heading': 'تعرف على الفريق',
    'about.cta': 'انضم إلى رحلتنا',

    // AI Features Section
    'ai.badge': 'حلول مدعومة بالذكاء الاصطناعي',
    'ai.heading1': 'عزّز أعمالك',
    'ai.heading2': 'بالذكاء الاصطناعي',
    'ai.subtitle': 'من الأتمتة الذكية إلى التطوير الشامل — نبني التقنية التي تقود نموك.',
    'ai.tab.all': 'جميع القدرات',
    'ai.tab.ai': 'الذكاء الاصطناعي',
    'ai.tab.dev': 'التطوير',
    'ai.tab.cloud': 'السحابة والبيانات',
    'ai.tab.uae': 'تكاملات الإمارات',
    'ai.cta.heading': 'هل أنت مستعد لبناء شيء استثنائي؟',
    'ai.cta.sub': 'دعنا نناقش مشروعك ونجد الحل الذكي المناسب.',
    'ai.cta.btn': 'ابدأ مشروعك ←',

    // Contact Section
    'contact.heading1': 'لنبني شيئاً',
    'contact.heading2': 'رائعاً',
    'contact.subtitle': 'هل أنت مستعد لتحويل فكرتك إلى واقع؟ تواصل مع فريقنا ودعنا نناقش كيف يمكننا تسريع نمو أعمالك.',
    'contact.form.heading': 'ابدأ مشروعك',
    'contact.form.subheading': 'أكمل النموذج أدناه وسنتواصل معك خلال 24 ساعة بعرض تفصيلي.',
    'contact.form.name': 'الاسم الكامل *',
    'contact.form.namePh': 'محمد علي',
    'contact.form.email': 'البريد الإلكتروني *',
    'contact.form.company': 'الشركة',
    'contact.form.companyPh': 'اسم الشركة',
    'contact.form.budget': 'ميزانية المشروع',
    'contact.form.budgetPh': 'اختر النطاق',
    'contact.form.project': 'نوع المشروع',
    'contact.form.projectPh': 'اختر نوع المشروع',
    'contact.form.message': 'تفاصيل المشروع *',
    'contact.form.messagePh': 'أخبرنا عن مشروعك والجدول الزمني وأي متطلبات خاصة...',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جارٍ الإرسال…',
    'contact.info.heading': 'تواصل معنا',
    'contact.info.email.title': 'راسلنا',
    'contact.info.email.desc': 'راسلنا في أي وقت',
    'contact.info.phone.title': 'اتصل بنا',
    'contact.info.phone.desc': 'الاثنين - الجمعة من 8ص إلى 5م',
    'contact.info.map.title': 'زرنا',
    'contact.info.map.desc': 'تفضل بزيارتنا في مكتبنا',
    'contact.info.time.title': 'وقت الاستجابة',
    'contact.info.time.desc': 'نرد على جميع الاستفسارات بسرعة',
    'contact.action.consult.title': 'استشارة مجانية',
    'contact.action.consult.desc': 'جلسة استراتيجية لمدة 30 دقيقة',
    'contact.action.consult.btn': 'احجز الآن',
    'contact.action.demo.title': 'احجز عرضاً',
    'contact.action.demo.desc': 'شاهد حلولنا في العمل',
    'contact.action.demo.btn': 'احجز',
    'contact.news.title': 'ابقَ على اطلاع',
    'contact.news.sub': 'احصل على أحدث رؤى التقنية واتجاهات الصناعة في بريدك.',
    'contact.news.ph': 'أدخل بريدك الإلكتروني',
    'contact.news.btn': 'اشترك',
    'contact.toast.title': 'تم الإرسال!',
    'contact.toast.desc': 'شكراً! سنتواصل معك خلال 24 ساعة.',
    'contact.toast.errTitle': 'خطأ',
    'contact.toast.errDesc': 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',

    // Reviews Section
    'reviews.heading1': 'موثوق من عملاء',
    'reviews.heading2': 'حول العالم',
    'reviews.subtitle': 'من أوروبا إلى الشرق الأوسط، تثق بنا الشركات لتقديم حلول رقمية استثنائية',
    'reviews.stat.projects': 'مشروع منجز',
    'reviews.stat.clients': 'عميل عالمي',
    'reviews.stat.countries': 'دولة نخدمها',
    'reviews.stat.satisfaction': 'رضا العملاء',

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
