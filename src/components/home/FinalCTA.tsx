import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="relative section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white max-w-3xl mx-auto leading-tight">
          Ready to Be Part of Something Extraordinary?
        </h2>
        
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Join 50,000+ participants in India's most prestigious techno-cultural experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="btn-accent px-8 py-4 text-lg group">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/sponsors" className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors">
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
