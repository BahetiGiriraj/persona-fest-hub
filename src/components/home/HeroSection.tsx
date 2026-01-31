import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";
import { MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative border-b border-gray-200 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Persona2026.png')" }}
      />

      {/* White Overlay for readability */}
      <div className="absolute inset-0 bg-white/90" />


      <div className="relative section-container pt-32 md:pt-36 pb-20 text-center">

        {/* Pre-title */}
        {/* <p className="text-sm text-gray-600 mb-4 tracking-wide">
          MIT ADT University Presents
        </p> */}

        {/* Main Title */}
        
      
        <div className="flex flex-col items-center mb-10">
  <img
    src="/logohero.png"
    alt="Persona Fest 2026"
    className="h-36 md:h-48 lg:h-56 xl:h-64 max-w-[95%] w-auto object-contain mb-6"
  />
</div>




        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A flagship techno-cultural celebration of innovation, creativity,
          and academic excellence.
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm md:text-base text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>19–21 February 2026</span>
          </div>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-400" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>MIT ADT University, Pune</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-10">
          <CountdownTimer />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-3 text-base font-semibold rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Register Now
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom spacing to show more content */}
      <div className="relative h-12 bg-white" />
    </section>
  );
};

export default HeroSection;
