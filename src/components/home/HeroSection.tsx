import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";
import { MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="relative z-10 section-container text-center py-32">
        {/* Pre-title */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <span className="text-sm text-white/90">MIT ADT University Presents</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          PERSONA FEST
        </h1>
        <p className="font-display text-2xl md:text-3xl text-white/90 mb-2">2026</p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
          Where Innovation Meets Excellence
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-accent mx-auto mb-8" />

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar className="w-5 h-5" />
            <span>19–21 February 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>MIT ADT University, Pune</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-12">
          <CountdownTimer />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="btn-accent px-8 py-4 text-lg">
            Register Now
          </Link>
          <Link to="/about" className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors">
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
