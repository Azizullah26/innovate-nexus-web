import rccLogo from "@/assets/clients/rcc-logo.png";
import alainCity from "@/assets/clients/alain-city.png";
import client3 from "@/assets/clients/client-3.png";
import moeLogo from "@/assets/clients/moe-logo.png";
import client5 from "@/assets/clients/client-5.jpg";

const ClientsSlider = () => {
  const clients = [
    { name: "RCC", logo: rccLogo },
    { name: "Al Ain City", logo: alainCity },
    { name: "Client 3", logo: client3 },
    { name: "Ministry of Education", logo: moeLogo },
    { name: "Client 5", logo: client5 },
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional digital solutions
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        {/* Infinite scroll container */}
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
