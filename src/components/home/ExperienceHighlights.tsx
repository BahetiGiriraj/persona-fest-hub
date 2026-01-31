import { Star, Zap, Heart, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Star,
    title: "Celebrity Performances",
    description: "Curated performances by renowned artists and cultural icons.",
  },
  {
    icon: Zap,
    title: "Innovation Hub",
    description: "Showcasing emerging technologies, ideas, and student innovation.",
  },
  {
    icon: Heart,
    title: "Cultural Fusion",
    description: "A celebration of diversity through art, tradition, and expression.",
  },
  {
    icon: Rocket,
    title: "Career Connect",
    description: "Opportunities to engage with industry leaders and professionals.",
  },
];

const ExperienceHighlights = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="section-container">

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Highlights
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Experience the Best of Persona Fest
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtfully designed experiences that bring together culture,
            technology, and meaningful connections.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-8 bg-white"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-md bg-gray-100">
                <item.icon className="w-5 h-5 text-gray-700" />
              </div>

              <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceHighlights;
