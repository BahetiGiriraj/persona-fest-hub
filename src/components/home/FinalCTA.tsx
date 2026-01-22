import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="relative section-container text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Be Part of 
          <span className="gradient-text block">Something Extraordinary?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          Join 50,000+ participants in India's most electrifying techno-cultural experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="btn-primary glow-primary text-lg group">
            <span className="flex items-center gap-2">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/sponsors" className="btn-outline text-lg">
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
