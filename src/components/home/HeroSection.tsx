import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";
import { MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 section-container text-center py-32">
        {/* Pre-title */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">MIT ADT University Presents</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">PERSONA</span>
          <span className="block text-foreground mt-2">FEST 2026</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Where Innovation Meets Imagination
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>19–21 February 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>MIT ADT University, Pune</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CountdownTimer />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Link to="/register" className="btn-primary glow-primary">
            <span>Register Now</span>
          </Link>
          <Link to="/about" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
