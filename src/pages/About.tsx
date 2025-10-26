import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Azma Tech | Expert Technology Solutions";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Azma Tech - a passionate team of developers, designers, and innovators building the future through cutting-edge technology solutions since 2020.');
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