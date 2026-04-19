import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Azain Tech | AI & Digital Solutions for UAE Enterprises";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Azain Tech — UAE-based experts in AI automation, intelligent agents, CRM/ERP, UAE PASS integrations, and full-stack development for enterprise and government clients.');
    }
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <AboutSection />
      </main>
    </>
  );
};

export default About;