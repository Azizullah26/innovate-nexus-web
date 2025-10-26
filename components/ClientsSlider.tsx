export default function ClientsSlider() {
  const clients = [
    { name: "RCC", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Al Ain City", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 3", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Ministry of Education", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 5", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Trusted by Leading Organizations</h2>
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
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
