import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">About The Festival</p>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
              India's Premier Techno-Cultural Festival
            </h2>
            
            <div className="w-16 h-1 bg-primary" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Persona Fest is where creativity meets technology. For three days, 
              experience the fusion of art, innovation, and culture that brings together 
              the brightest minds from across the nation at MIT ADT University.
            </p>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-professional p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">50,000+</h3>
              <p className="text-muted-foreground text-sm">Participants from across India</p>
            </div>
            
            <div className="card-professional p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">100+</h3>
              <p className="text-muted-foreground text-sm">Events & Competitions</p>
            </div>
            
            <div className="card-professional p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">3 Days</h3>
              <p className="text-muted-foreground text-sm">Of immersive experience</p>
            </div>
            
            <div className="card-professional p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="font-display font-bold text-accent">₹</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">₹15L+</h3>
              <p className="text-muted-foreground text-sm">Worth of prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
