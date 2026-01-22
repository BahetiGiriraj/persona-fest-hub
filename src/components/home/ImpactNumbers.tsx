import AnimatedCounter from "../AnimatedCounter";

const stats = [
  { value: 50000, suffix: "+", label: "Participants" },
  { value: 200, suffix: "+", label: "Institutions" },
  { value: 50, suffix: "+", label: "Speakers" },
  { value: 100, suffix: "+", label: "Events" },
];

const ImpactNumbers = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="section-container">
        <div className="section-header">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">By The Numbers</p>
          <h2 className="section-title">The Scale of Persona</h2>
          <p className="section-subtitle">
            Numbers that define India's most anticipated techno-cultural festival
          </p>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="stat-label-professional">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
