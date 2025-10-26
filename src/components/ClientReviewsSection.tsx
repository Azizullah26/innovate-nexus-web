import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ClientReviewsSection = () => {
  const reviews = [
    {
      name: "Pierre Dubois",
      company: "TechStartup Paris",
      location: "France 🇫🇷",
      review: "Excellente équipe! Ils ont transformé notre vision en réalité avec une expertise remarquable. Le résultat dépasse nos attentes.",
      rating: 5,
      language: "fr"
    },
    {
      name: "Mohammed Al-Rashid",
      company: "Dubai Innovations",
      location: "UAE 🇦🇪",
      review: "فريق محترف للغاية. لقد قدموا حلولاً مبتكرة لأعمالنا وكانت النتائج رائعة. أوصي بهم بشدة",
      rating: 5,
      language: "ar"
    },
    {
      name: "Sarah Johnson",
      company: "Global Tech Solutions",
      location: "UK 🇬🇧",
      review: "Outstanding service! Their technical expertise and attention to detail helped us scale our platform to millions of users. Highly recommended!",
      rating: 5,
      language: "en"
    },
    {
      name: "Hans Mueller",
      company: "Berlin Digital",
      location: "Germany 🇩🇪",
      review: "Hervorragende Arbeit! Die Zusammenarbeit war professionell und das Ergebnis übertrifft alle Erwartungen. Beste Entwickler mit denen wir je gearbeitet haben.",
      rating: 5,
      language: "de"
    },
    {
      name: "Fatima Al-Maktoum",
      company: "Emirates Business Hub",
      location: "UAE 🇦🇪",
      review: "Exceptional work! They delivered a cutting-edge solution that transformed our business operations. Professional team with deep technical knowledge.",
      rating: 5,
      language: "en"
    },
    {
      name: "Marco Rossi",
      company: "Milano Tech",
      location: "Italy 🇮🇹",
      review: "Lavoro fantastico! Hanno creato una soluzione su misura per le nostre esigenze. Squadra altamente professionale e competente.",
      rating: 5,
      language: "it"
    },
    {
      name: "Ahmed Hassan",
      company: "Abu Dhabi Digital",
      location: "UAE 🇦🇪",
      review: "الخدمة ممتازة والجودة عالية جداً. ساعدونا في تطوير منصتنا الرقمية بشكل احترافي. شكراً للفريق المتميز",
      rating: 5,
      language: "ar"
    },
    {
      name: "Carlos Rodriguez",
      company: "Barcelona Innovation",
      location: "Spain 🇪🇸",
      review: "¡Increíble experiencia! Equipo muy profesional que entregó resultados excepcionales. Superaron todas nuestras expectativas.",
      rating: 5,
      language: "es"
    },
    {
      name: "Emily Chen",
      company: "London FinTech",
      location: "UK 🇬🇧",
      review: "Best development team we've worked with! Their AI integration expertise helped us automate 70% of our processes. Truly exceptional!",
      rating: 5,
      language: "en"
    },
    {
      name: "Jean Dupont",
      company: "Lyon Digital Agency",
      location: "France 🇫🇷",
      review: "Service exceptionnel! L'équipe a fait preuve d'une grande expertise technique et d'un professionnalisme remarquable. Résultats parfaits!",
      rating: 5,
      language: "fr"
    },
    {
      name: "Khalid Al-Mansoori",
      company: "Sharjah Tech Corp",
      location: "UAE 🇦🇪",
      review: "فريق عمل رائع وخدمة ممتازة. النتائج فاقت التوقعات والتعامل كان في غاية الاحترافية",
      rating: 5,
      language: "ar"
    },
    {
      name: "Thomas Schmidt",
      company: "Frankfurt Solutions",
      location: "Germany 🇩🇪",
      review: "Ausgezeichnete Qualität und professionelle Beratung. Das Team hat unser Projekt perfekt umgesetzt. Absolut empfehlenswert!",
      rating: 5,
      language: "de"
    }
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Clients <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From Europe to the Middle East, businesses trust us to deliver exceptional digital solutions
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Reviews */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {duplicatedReviews.map((review, index) => (
            <Card 
              key={index}
              className="flex-shrink-0 w-[400px] mx-4 border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p 
                  className={`text-muted-foreground leading-relaxed mb-6 min-h-[120px] ${
                    review.language === 'ar' ? 'text-right' : 'text-left'
                  }`}
                  dir={review.language === 'ar' ? 'rtl' : 'ltr'}
                >
                  {review.review}
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    {review.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {review.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {review.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</div>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">40+</div>
            <p className="text-muted-foreground">Global Clients</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15+</div>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
