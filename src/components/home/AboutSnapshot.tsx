import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>About The Festival</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              India's Premier
              <span className="gradient-text block">Techno-Cultural Festival</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Persona Fest is where creativity collides with technology. For three electrifying days, 
              experience the fusion of art, innovation, and culture that brings together the brightest 
              minds from across the nation.
            </p>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Visual Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">50,000+</h3>
              <p className="text-muted-foreground text-sm">Participants from across India</p>
            </div>
            
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-500 mt-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-lg">100+</h3>
              <p className="text-muted-foreground text-sm">Events & Competitions</p>
            </div>
            
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-500">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg">3 Days</h3>
              <p className="text-muted-foreground text-sm">Of pure entertainment</p>
            </div>
            
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-500 mt-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="font-display font-bold gradient-text">₹15L+</span>
              </div>
              <h3 className="font-display font-semibold text-lg">Prize Pool</h3>
              <p className="text-muted-foreground text-sm">Worth of prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
