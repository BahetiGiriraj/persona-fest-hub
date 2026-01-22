import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Mail, TrendingUp, Users, Eye, Award, ArrowRight } from "lucide-react";

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "₹25,00,000+",
    color: "from-slate-300 to-slate-100",
    textColor: "text-slate-800",
    benefits: [
      "Title sponsorship rights",
      "Main stage branding",
      "Exclusive product launches",
      "VIP hospitality suite",
      "All digital platforms coverage",
      "Dedicated activation zone",
    ],
  },
  {
    name: "Gold",
    price: "₹15,00,000+",
    color: "from-amber-400 to-yellow-300",
    textColor: "text-amber-900",
    benefits: [
      "Co-sponsor branding",
      "Stage backdrop presence",
      "Product sampling rights",
      "Premium booth space",
      "Social media features",
      "Event naming rights (1)",
    ],
  },
  {
    name: "Silver",
    price: "₹7,50,000+",
    color: "from-gray-400 to-gray-300",
    textColor: "text-gray-800",
    benefits: [
      "Associate sponsor status",
      "Banner placements",
      "Standard booth space",
      "Website logo placement",
      "Email newsletter mention",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Bronze",
    price: "₹3,00,000+",
    color: "from-orange-600 to-orange-400",
    textColor: "text-white",
    benefits: [
      "Supporter status",
      "Standee placements",
      "Backdrop logo",
      "Website listing",
      "Social media mention",
    ],
  },
];

const impactStats = [
  { icon: Users, value: "50,000+", label: "Student Footfall" },
  { icon: Eye, value: "10M+", label: "Social Impressions" },
  { icon: TrendingUp, value: "200+", label: "Colleges Reached" },
  { icon: Award, value: "85%", label: "Gen-Z Audience" },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Partner with <span className="gradient-text">Persona 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with 50,000+ young, influential minds at India's premier techno-cultural festival.
            </p>
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">
                Why <span className="gradient-text">Sponsor Persona?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Maximize your brand's reach among India's most dynamic demographic
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-20 bg-card/30">
          <div className="section-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Sponsorship <span className="gradient-text">Packages</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier) => (
                <div key={tier.name} className="glass-card overflow-hidden">
                  <div className={`bg-gradient-to-br ${tier.color} p-6 text-center`}>
                    <h3 className={`font-display text-2xl font-bold ${tier.textColor}`}>{tier.name}</h3>
                    <p className={`text-sm mt-1 ${tier.textColor} opacity-80`}>{tier.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-20" />
          
          <div className="relative section-container">
            <div className="glass-card p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-4">
                Ready to <span className="gradient-text">Partner?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Download our sponsorship brochure for detailed information or get in touch with our team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
                <a href="/contact" className="btn-outline inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
