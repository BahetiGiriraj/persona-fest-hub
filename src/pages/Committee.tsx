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
  bgColor: string;
}

const MemberCard = ({ name, role, initials, bgColor }: MemberCardProps) => (
  <div className="card-professional p-6 text-center hover:shadow-lg transition-all duration-300">
    <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${bgColor} flex items-center justify-center`}>
      <span className="font-display font-bold text-xl text-white">{initials}</span>
    </div>
    <h3 className="font-display font-semibold text-lg text-foreground">{name}</h3>
    <p className="text-muted-foreground text-sm">{role}</p>
  </div>
);

const Committee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary relative">
          <div className="absolute inset-0 opacity-5 pattern-dots" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-white">
              Meet the Team
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              The passionate individuals behind Persona Fest 2026
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Guidance</p>
              <h2 className="section-title">Faculty Coordinators</h2>
              <div className="divider" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {facultyCoordinators.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  bgColor="bg-primary"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Core Committee */}
        <section className="py-16 bg-muted">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Leadership</p>
              <h2 className="section-title">Core Committee</h2>
              <div className="divider" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreCommittee.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  bgColor="bg-accent"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Student Leads */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Execution</p>
              <h2 className="section-title">Student Leads</h2>
              <div className="divider" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentLeads.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  bgColor="bg-slate-600"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-muted">
          <div className="section-container text-center">
            <div className="card-elevated p-12 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">
                Want to Join the Team?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate volunteers to help make Persona Fest even better.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Get in Touch
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
