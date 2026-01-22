import { Music, Code, Palette, Briefcase, UtensilsCrossed, Radio } from "lucide-react";

const categories = [
  {
    icon: Music,
    name: "Cultural",
    description: "Dance, music, drama, and artistic performances",
    color: "from-pink-500 to-rose-500",
    events: ["Battle of Bands", "Dance Wars", "Nukkad Natak", "Poetry Slam"]
  },
  {
    icon: Code,
    name: "Technical",
    description: "Hackathons, coding battles, and tech challenges",
    color: "from-cyan-500 to-blue-500",
    events: ["CodeCraft", "HackNova", "RoboRace", "CTF Challenge"]
  },
  {
    icon: Palette,
    name: "Design",
    description: "UI/UX, photography, and creative showcases",
    color: "from-purple-500 to-violet-500",
    events: ["Design Sprint", "Photo Walk", "Poster Making", "Digital Art"]
  },
  {
    icon: Briefcase,
    name: "Management",
    description: "Case studies, debates, and business simulations",
    color: "from-amber-500 to-orange-500",
    events: ["B-Plan", "Mock Stock", "Ad Wars", "Corporate Debate"]
  },
  {
    icon: UtensilsCrossed,
    name: "Food-Tech",
    description: "Culinary innovation and food science",
    color: "from-green-500 to-emerald-500",
    events: ["Chef's Table", "Food Tech Expo", "Recipe Remix", "Taste Trail"]
  },
  {
    icon: Radio,
    name: "MANET",
    description: "Media, animation, and entertainment technology",
    color: "from-red-500 to-pink-500",
    events: ["Short Film Fest", "Animation Challenge", "VR Experience", "Podcast Wars"]
  },
];

const EventCategories = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="gradient-text">Event Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six domains, endless possibilities. Find your passion and compete with the best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.events.map((event) => (
                  <span 
                    key={event}
                    className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                  >
                    {event}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
