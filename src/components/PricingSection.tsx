import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, TrendingUp, Building2, Smartphone } from "lucide-react";

const PricingSection = () => {
  const [currency, setCurrency] = useState<"EUR" | "AED">("EUR");
  
  const exchangeRate = 4; // 1 EUR ≈ 4 AED
  
  const convert = (eurPrice: string) => {
    if (currency === "EUR") return eurPrice;
    
    const match = eurPrice.match(/€([\d,]+)/g);
    if (!match) return eurPrice;
    
    return eurPrice.replace(/€([\d,]+)/g, (_, amount) => {
      const numAmount = parseInt(amount.replace(/,/g, ''));
      return `AED ${(numAmount * exchangeRate).toLocaleString()}`;
    });
  };

  const packages = [
    {
      icon: Sparkles,
      name: "Starter Package",
      target: "Small Businesses",
      description: "Perfect for cafés, salons, startups, freelancers, and small shops",
      price: "€2,500 – €5,000",
      monthly: "€1,000 / month",
      features: [
        "Professional website (up to 5 pages, responsive)",
        "SEO setup & Google My Business optimization",
        "Social media management (2 platforms, 3 posts/week)",
        "One digital ad campaign (up to €500 ad spend)",
        "15% agency fee on ad spend"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: TrendingUp,
      name: "Growth Package",
      target: "SMEs & Growing Brands",
      description: "Ideal for retail stores, real estate, clinics, and logistics",
      price: "€8,000 – €15,000",
      monthly: "€2,500 – €5,000 / month",
      popular: true,
      features: [
        "Custom website or e-commerce (WordPress/Shopify/Custom)",
        "SEO & analytics tracking",
        "4–5 social media platforms with content strategy",
        "Google, Meta & TikTok ads (up to €2,000 ad spend)",
        "Email marketing setup & automation",
        "10–20% management fee on ad budget"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Building2,
      name: "Professional Package",
      target: "Established Companies",
      description: "For construction, automotive, fashion, tech, and regional brands",
      price: "€25,000 – €60,000",
      monthly: "€6,000 – €15,000 / month",
      features: [
        "Custom enterprise website (multi-language, integrations)",
        "Advanced SEO & backlink campaigns",
        "Full digital marketing plan (Google, Meta, TikTok, LinkedIn)",
        "Video & motion ad production",
        "Social media management for 5+ platforms",
        "Monthly analytics & performance reporting",
        "Ad budgets €10k–€100k/month supported"
      ],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      target: "iOS & Android Apps",
      description: "Native or cross-platform mobile applications",
      price: "€20,000 – €400,000+",
      monthly: "€2,000 – €6,000 / month",
      features: [
        "Basic MVP: €20,000 – €40,000",
        "Mid-range (backend, notifications, payments): €50,000 – €120,000",
        "Complex/Enterprise (AI, chat, live data): €150,000 – €400,000+",
        "Maintenance & updates included",
        "App Store & Play Store deployment"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const addOns = [
    { name: "Logo & branding kit", price: "€500 – €2,000" },
    { name: "Video marketing content", price: "€1,000 – €5,000" },
    { name: "SEO audit & competitor report", price: "€800 – €2,000" },
    { name: "Influencer collaboration & campaign setup", price: "€1,500 – €6,000" }
  ];

  const retainerModel = [
    { package: "Starter", deliverables: "2 platforms + 1 ad campaign", price: "€1,000" },
    { package: "Growth", deliverables: "4 platforms + PPC + SEO", price: "€3,500" },
    { package: "Professional", deliverables: "Full digital + creative + strategy", price: "€10,000+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Transparent Pricing</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Packages & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect package for your business growth
          </p>
          
          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-full">
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-6 py-2 rounded-full transition-all ${
                currency === "EUR" 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇪🇺 EUR
            </button>
            <button
              onClick={() => setCurrency("AED")}
              className={`px-6 py-2 rounded-full transition-all ${
                currency === "AED" 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇦🇪 AED
            </button>
          </div>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name}
              className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? "border-primary border-2" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-primary">Most Popular</Badge>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-sm font-semibold text-primary">
                  {pkg.target}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">
                    {convert(pkg.price)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    one-time or {convert(pkg.monthly)} ongoing
                  </div>
                </div>
                
                <div className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{convert(feature)}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional Add-Ons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Optional Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon) => (
              <Card key={addon.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-semibold mb-1">{addon.name}</p>
                      <p className="text-sm text-primary font-bold">{convert(addon.price)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Retainer Model */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Monthly Retainer Model</h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Package</th>
                    <th className="text-left p-4 font-semibold">Deliverables</th>
                    <th className="text-right p-4 font-semibold">Price/Month</th>
                  </tr>
                </thead>
                <tbody>
                  {retainerModel.map((item, idx) => (
                    <tr key={item.package} className={idx !== retainerModel.length - 1 ? "border-b" : ""}>
                      <td className="p-4 font-semibold">{item.package}</td>
                      <td className="p-4 text-muted-foreground">{item.deliverables}</td>
                      <td className="p-4 text-right font-bold text-primary">{convert(item.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which package is right for you?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
