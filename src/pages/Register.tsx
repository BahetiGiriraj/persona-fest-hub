import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { User, Users, Eye, ArrowRight, CheckCircle2, CircleDot } from "lucide-react";

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
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Register for <span className="gradient-text">Persona 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8">
              Secure your spot at India's premier techno-cultural festival
            </p>
            <a 
              href="#register-form" 
              className="btn-primary glow-primary inline-flex items-center gap-2"
            >
              <span>Start Registration</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Who Can Register */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                Who Can <span className="gradient-text">Participate?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Persona Fest is open to students from all recognized universities and 
                colleges across India. All you need is a valid student ID.
              </p>
            </div>
          </div>
        </section>

        {/* Participation Types */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Choose Your <span className="gradient-text">Participation Type</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {participationTypes.map((type) => (
                <div 
                  key={type.title} 
                  className={`glass-card p-8 relative transition-all duration-500 hover:scale-105 ${
                    type.popular ? 'border-primary/50' : ''
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    type.popular 
                      ? 'bg-gradient-to-br from-primary to-secondary' 
                      : 'bg-muted'
                  }`}>
                    <type.icon className={`w-7 h-7 ${type.popular ? 'text-primary-foreground' : 'text-foreground'}`} />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
        <section className="py-20">
          <div className="section-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Registration <span className="gradient-text">Process</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {steps.map((item, index) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="register-form" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          
          <div className="relative section-container text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Registration opens soon. Leave your email to be notified when registrations go live.
            </p>
            
            <div className="glass-card p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="btn-primary whitespace-nowrap">
                  <span>Notify Me</span>
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
