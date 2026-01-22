import { Music, Code, Palette, Briefcase, UtensilsCrossed, Radio } from "lucide-react";

const categories = [
  {
    icon: Music,
    name: "Cultural",
    description: "Dance, music, drama, and artistic performances",
    events: ["Battle of Bands", "Dance Wars", "Nukkad Natak", "Poetry Slam"]
  },
  {
    icon: Code,
    name: "Technical",
    description: "Hackathons, coding battles, and tech challenges",
    events: ["CodeCraft", "HackNova", "RoboRace", "CTF Challenge"]
  },
  {
    icon: Palette,
    name: "Design",
    description: "UI/UX, photography, and creative showcases",
    events: ["Design Sprint", "Photo Walk", "Poster Making", "Digital Art"]
  },
  {
    icon: Briefcase,
    name: "Management",
    description: "Case studies, debates, and business simulations",
    events: ["B-Plan", "Mock Stock", "Ad Wars", "Corporate Debate"]
  },
  {
    icon: UtensilsCrossed,
    name: "Food-Tech",
    description: "Culinary innovation and food science",
    events: ["Chef's Table", "Food Tech Expo", "Recipe Remix", "Taste Trail"]
  },
  {
    icon: Radio,
    name: "MANET",
    description: "Media, animation, and entertainment technology",
    events: ["Short Film Fest", "Animation Challenge", "VR Experience", "Podcast Wars"]
  },
];

const EventCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="section-header">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Event Domains</p>
          <h2 className="section-title">Explore Event Categories</h2>
          <p className="section-subtitle">
            Six domains, endless possibilities. Find your passion and compete with the best.
          </p>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="category-card-professional group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <category.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{category.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.events.map((event) => (
                  <span 
                    key={event}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
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
