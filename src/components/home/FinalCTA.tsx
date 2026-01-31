import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="section-container text-center max-w-3xl">
        
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
          Be a Part of Persona Fest 2026
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Join students, institutions, and professionals from across the country
          for three days of culture, innovation, and collaboration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-3 text-base font-semibold rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Register Now
          </Link>

          <Link
            to="/sponsors"
            className="px-8 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Become a Sponsor
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
