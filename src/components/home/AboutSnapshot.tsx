import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              About the Festival
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
              India’s Premier Techno-Cultural Festival
            </h2>

            <div className="w-16 h-1 bg-primary" />

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Persona Fest is where creativity meets technology. Over three days,
              the festival brings together innovation, art, and culture—uniting
              students, institutions, and industry at MIT ADT University.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="hidden lg:block">
            <div className="w-full h-[320px] rounded-lg overflow-hidden border border-gray-200">
             <img
  src="/about.png"
  alt="Persona Fest at MIT ADT University"
  className="w-full h-full object-cover"
/>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
