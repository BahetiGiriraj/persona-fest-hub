import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Users, Eye, ArrowRight, CheckCircle2 } from "lucide-react";

const participationTypes = [
  {
    icon: User,
    title: "Individual",
    description: "Compete solo in events designed for individual participants",
    features: ["Personal dashboard", "Event selection", "Certificate"],
    popular: false,
  },
  {
    icon: Users,
    title: "Team",
    description: "Form a team and participate in collaborative competitions",
    features: ["Team management", "Joint registration", "Group certificates"],
    popular: true,
  },
  {
    icon: Eye,
    title: "Visitor",
    description: "Experience the festival atmosphere without competing",
    features: ["All-access pass", "Workshops", "Pro nights"],
    popular: false,
  },
];

const steps = [
  { step: 1, title: "Create Account", description: "Sign up with your email and basic details" },
  { step: 2, title: "Choose Events", description: "Browse and select events you want to participate in" },
  { step: 3, title: "Make Payment", description: "Secure online payment for your registrations" },
  { step: 4, title: "Get Confirmed", description: "Receive confirmation and event passes via email" },
];

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary relative">
          <div className="absolute inset-0 opacity-5 pattern-dots" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-white">
              Register for Persona 2026
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Secure your spot at India's premier techno-cultural festival
            </p>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>
        </section>

        {/* Who Can Register */}
        <section className="py-16 bg-white">
          <div className="section-container text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Eligibility</p>
            <h2 className="section-title">Who Can Participate?</h2>
            <p className="section-subtitle">
              Persona Fest is open to students from all recognized universities and 
              colleges across India. All you need is a valid student ID.
            </p>
            <div className="divider" />
          </div>
        </section>

        {/* Participation Types */}
        <section className="py-16 bg-muted">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Options</p>
              <h2 className="section-title">Choose Your Participation Type</h2>
              <div className="divider" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {participationTypes.map((type) => (
                <div 
                  key={type.title} 
                  className={`card-elevated p-8 relative transition-all duration-300 hover:shadow-xl ${
                    type.popular ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                    type.popular ? 'bg-accent' : 'bg-primary/10'
                  }`}>
                    <type.icon className={`w-7 h-7 ${type.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Steps */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">How It Works</p>
              <h2 className="section-title">Registration Process</h2>
              <div className="divider" />
            </div>
            
            <div className="max-w-3xl mx-auto">
              {steps.map((item, index) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-white">
                      {item.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary relative">
          <div className="absolute inset-0 opacity-5 pattern-dots" />
          <div className="relative section-container text-center max-w-2xl">
            <h2 className="font-display text-3xl font-semibold mb-4 text-white">
              Ready to Join Us?
            </h2>
            <p className="text-white/80 mb-8">
              Registration opens soon. Leave your email to be notified when registrations go live.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="btn-primary whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                We'll send you a reminder when registrations open
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
