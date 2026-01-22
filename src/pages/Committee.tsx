import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const facultyCoordinators = [
  { name: "Dr. Priya Sharma", role: "Faculty Advisor", initials: "PS" },
  { name: "Prof. Rajesh Kumar", role: "Technical Coordinator", initials: "RK" },
  { name: "Dr. Anjali Desai", role: "Cultural Coordinator", initials: "AD" },
  { name: "Prof. Vikram Singh", role: "Management Coordinator", initials: "VS" },
];

const coreCommittee = [
  { name: "Aarav Patel", role: "President", initials: "AP" },
  { name: "Priya Mehta", role: "Vice President", initials: "PM" },
  { name: "Rohan Joshi", role: "General Secretary", initials: "RJ" },
  { name: "Sneha Kapoor", role: "Treasurer", initials: "SK" },
  { name: "Arjun Nair", role: "Technical Head", initials: "AN" },
  { name: "Kavya Sharma", role: "Cultural Head", initials: "KS" },
];

const studentLeads = [
  { name: "Ishaan Malhotra", role: "Events Lead", initials: "IM" },
  { name: "Ananya Reddy", role: "Marketing Lead", initials: "AR" },
  { name: "Rahul Verma", role: "Sponsorship Lead", initials: "RV" },
  { name: "Pooja Iyer", role: "Hospitality Lead", initials: "PI" },
  { name: "Aditya Khanna", role: "Logistics Lead", initials: "AK" },
  { name: "Neha Gupta", role: "Design Lead", initials: "NG" },
  { name: "Varun Saxena", role: "PR Lead", initials: "VS" },
  { name: "Riya Bansal", role: "Content Lead", initials: "RB" },
];

interface MemberCardProps {
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

const MemberCard = ({ name, role, initials, gradient }: MemberCardProps) => (
  <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500">
    <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
      <span className="font-display font-bold text-xl text-white">{initials}</span>
    </div>
    <h3 className="font-display font-semibold text-lg">{name}</h3>
    <p className="text-muted-foreground text-sm">{role}</p>
  </div>
);

const Committee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              The passionate individuals behind Persona Fest 2026
            </p>
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className="py-16">
          <div className="section-container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Faculty <span className="gradient-text">Coordinators</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {facultyCoordinators.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  gradient="from-amber-500 to-orange-500"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Core Committee */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Core <span className="gradient-text">Committee</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreCommittee.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  gradient="from-primary to-secondary"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Student Leads */}
        <section className="py-16">
          <div className="section-container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Student <span className="gradient-text">Leads</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentLeads.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  gradient="from-purple-500 to-pink-500"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16">
          <div className="section-container text-center">
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-4">
                Want to Join the Team?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate volunteers to help make Persona Fest even better.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;
