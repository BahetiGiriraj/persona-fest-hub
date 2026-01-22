import { Star, Zap, Heart, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Star,
    title: "Celebrity Performances",
    description: "Witness electrifying performances by top artists",
  },
  {
    icon: Zap,
    title: "Innovation Hub",
    description: "Experience cutting-edge tech demonstrations",
  },
  {
    icon: Heart,
    title: "Cultural Fusion",
    description: "Celebrate diversity through art and tradition",
  },
  {
    icon: Rocket,
    title: "Career Connect",
    description: "Network with industry leaders and recruiters",
  },
];

const ExperienceHighlights = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="section-container">
        <div className="section-header">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Highlights</p>
          <h2 className="section-title">Experience the Best</h2>
          <p className="section-subtitle">
            More than a festival – it's a journey of discovery, connection, and unforgettable moments.
          </p>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div 
              key={item.title} 
              className="card-professional p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
