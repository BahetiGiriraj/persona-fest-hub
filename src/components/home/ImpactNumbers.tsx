import AnimatedCounter from "../AnimatedCounter";

const stats = [
  { value: 50000, suffix: "+", label: "Participants" },
  { value: 200, suffix: "+", label: "Institutions" },
  { value: 50, suffix: "+", label: "Speakers" },
  { value: 100, suffix: "+", label: "Events" },
];

const ImpactNumbers = () => {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Scale of <span className="gradient-text">Persona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Numbers that define India's most anticipated techno-cultural festival
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
