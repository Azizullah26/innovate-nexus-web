import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-background.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Badge - Below Navigation (30px from bottom of nav) */}
      <div className="absolute top-[94px] sm:top-[94px] left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
        <div className="flex justify-center">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
            🚀 <span className="ml-2">Building the Future with AI & Fullstack Solutions</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center mt-8">
        <div className="max-w-4xl mx-auto animate-fade-in">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance px-2">
            Transform Your Vision Into
            <span className="gradient-text block text-green-600" style={{ WebkitTextStroke: '1px white' }}>Digital Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            We specialize in fullstack development, AI integration, and cutting-edge digital solutions
            that propel startups and enterprises toward unprecedented growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button variant="hero" size="xl" asChild className="group w-full sm:w-auto">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button variant="glass" size="xl" className="group w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-black/95">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NXzZv19BoOA"
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100+</div>
              <div className="text-white/70 text-xs sm:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-white/70 text-xs sm:text-sm">Client Satisfaction</div>
              
              {/* Scroll Indicator */}
              <div className="mt-8 flex justify-center">
                <div className="animate-pulse-glow">
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-white/70 text-xs sm:text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;