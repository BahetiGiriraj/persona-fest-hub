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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Experience the <span className="gradient-text-accent">Magic</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            More than a festival – it's a journey of discovery, connection, and unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={item.title} 
              className="glass-card p-8 text-center group hover:bg-primary/5 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
