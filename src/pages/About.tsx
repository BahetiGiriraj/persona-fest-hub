import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Building2, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Persona Fest</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              India's most anticipated techno-cultural festival, uniting innovation and artistry.
            </p>
          </div>
        </section>

        {/* What is Persona */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  What is <span className="gradient-text">Persona Fest?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Persona Fest is the flagship techno-cultural extravaganza of MIT ADT University, 
                  Pune. Since its inception, it has grown to become one of India's largest college 
                  festivals, attracting over 50,000 participants from 200+ institutions nationwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For three exhilarating days in February, the campus transforms into a vibrant 
                  hub of creativity, technology, and cultural expression. From intense coding 
                  battles to mesmerizing dance performances, from thought-provoking debates to 
                  cutting-edge tech exhibitions – Persona Fest has it all.
                </p>
              </div>
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">National Recognition</h3>
                    <p className="text-muted-foreground text-sm">Ranked among India's top 10 college festivals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-muted-foreground text-sm">Backed by MIT ADT University's legacy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Student-Driven</h3>
                    <p className="text-muted-foreground text-sm">Organized by 500+ passionate student volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section className="py-20 bg-card/50">
          <div className="section-container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Messages from <span className="gradient-text">Leadership</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder's Message */}
              <div className="glass-card p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-primary-foreground">VK</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">Dr. Vishwanath Karad</h3>
                    <p className="text-muted-foreground text-sm">Founder, MIT Group of Institutions</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Persona Fest embodies our vision of nurturing holistic development. 
                  It's a platform where young minds explore, innovate, and express themselves 
                  while building bridges across cultures and disciplines."
                </p>
              </div>

              {/* VC's Message */}
              <div className="glass-card p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-secondary-foreground">VC</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">Dr. Sunita Karad</h3>
                    <p className="text-muted-foreground text-sm">Vice Chancellor, MIT ADT University</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Persona Fest 2026 promises to be our grandest edition yet. We invite 
                  students from across India to join us in celebrating the spirit of 
                  innovation, creativity, and excellence."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campus */}
        <section className="py-20">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              World-Class <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              MIT ADT University's sprawling 100+ acre campus provides the perfect 
              backdrop for Persona Fest, with state-of-the-art venues and facilities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Main Arena", "Tech Hub", "Cultural Center", "Open Grounds"].map((venue) => (
                <div key={venue} className="glass-card p-6 text-center">
                  <p className="font-display font-semibold">{venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
