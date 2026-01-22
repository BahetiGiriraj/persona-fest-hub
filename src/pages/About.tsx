import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Building2, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary relative">
          <div className="absolute inset-0 opacity-5 pattern-dots" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-white">
              About Persona Fest
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              India's most anticipated techno-cultural festival, uniting innovation and artistry.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          </div>
        </section>

        {/* What is Persona */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our Story</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  What is Persona Fest?
                </h2>
                <div className="w-16 h-1 bg-primary" />
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
              <div className="space-y-6">
                <div className="card-professional p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2 text-foreground">National Recognition</h3>
                    <p className="text-muted-foreground text-sm">Ranked among India's top 10 college festivals</p>
                  </div>
                </div>
                <div className="card-professional p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2 text-foreground">Academic Excellence</h3>
                    <p className="text-muted-foreground text-sm">Backed by MIT ADT University's legacy</p>
                  </div>
                </div>
                <div className="card-professional p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2 text-foreground">Student-Driven</h3>
                    <p className="text-muted-foreground text-sm">Organized by 500+ passionate student volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="section-header">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Leadership</p>
              <h2 className="section-title">Messages from Leadership</h2>
              <div className="divider" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Founder's Message */}
              <div className="card-elevated p-8 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-white">VK</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Dr. Vishwanath Karad</h3>
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
              <div className="card-elevated p-8 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-white">SK</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Dr. Sunita Karad</h3>
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
        <section className="py-20 bg-white">
          <div className="section-container text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Venue</p>
            <h2 className="section-title">World-Class Infrastructure</h2>
            <p className="section-subtitle mb-6">
              MIT ADT University's sprawling 100+ acre campus provides the perfect 
              backdrop for Persona Fest, with state-of-the-art venues and facilities.
            </p>
            <div className="divider mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["Main Arena", "Tech Hub", "Cultural Center", "Open Grounds"].map((venue) => (
                <div key={venue} className="card-professional p-6 text-center">
                  <p className="font-display font-semibold text-foreground">{venue}</p>
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
