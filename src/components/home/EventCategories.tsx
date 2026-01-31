import { Music, Code, Palette, Briefcase, UtensilsCrossed, Radio } from "lucide-react";

const categories = [
  {
    icon: Music,
    name: "Cultural",
    description: "Dance, music, drama, and artistic performances",
  },
  {
    icon: Code,
    name: "Technical",
    description: "Hackathons, coding challenges, and tech competitions",
  },
  {
    icon: Palette,
    name: "Design",
    description: "UI/UX, photography, and creative showcases",
  },
  {
    icon: Briefcase,
    name: "Management",
    description: "Case studies, debates, and business simulations",
  },
  {
    icon: UtensilsCrossed,
    name: "Food Technology",
    description: "Culinary innovation and food science events",
  },
  {
    icon: Radio,
    name: "MANET",
    description: "Media, animation, and entertainment technology",
  },
];

const EventCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Event Domains
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Explore Event Categories
          </h2>
          <p className="text-lg text-gray-600">
            Six focused domains designed to bring together creativity, technology,
            and competitive excellence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow bg-white"
            >
              <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mb-5">
                <category.icon className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
