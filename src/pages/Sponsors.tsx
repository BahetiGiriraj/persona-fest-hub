import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Mail, TrendingUp, Users, Eye, Award } from "lucide-react";

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "₹25,00,000+",
    bgColor: "bg-slate-800",
    textColor: "text-white",
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
    bgColor: "bg-accent",
    textColor: "text-white",
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
    bgColor: "bg-gray-400",
    textColor: "text-white",
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
    bgColor: "bg-amber-700",
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
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary relative">
          <div className="absolute inset-0 opacity-5 pattern-dots" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-white">
              Partner with Persona 2026
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Connect with 50,000+ young, influential minds at India's premier techno-cultural festival.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">The Opportunity</p>
              <h2 className="section-title">Why Sponsor Persona?</h2>
              <p className="section-subtitle">
                Maximize your brand's reach among India's most dynamic demographic
              </p>
              <div className="divider" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="card-professional p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Packages</p>
              <h2 className="section-title">Sponsorship Tiers</h2>
              <div className="divider" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier) => (
                <div key={tier.name} className="card-elevated overflow-hidden">
                  <div className={`${tier.bgColor} p-6 text-center`}>
                    <h3 className={`font-display text-2xl font-bold ${tier.textColor}`}>{tier.name}</h3>
                    <p className={`text-sm mt-1 ${tier.textColor} opacity-90`}>{tier.price}</p>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
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
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="card-elevated p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-semibold mb-4 text-foreground">
                Ready to Partner?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download our sponsorship brochure for detailed information or get in touch with our team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
                <a href="/contact" className="btn-secondary inline-flex items-center gap-2">
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
