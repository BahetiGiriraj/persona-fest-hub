import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Mail, TrendingUp, Users, Eye, Award } from "lucide-react";

const impactStats = [
  { icon: Users, value: "50,000+", label: "Student Footfall" },
  { icon: Eye, value: "10M+", label: "Digital Impressions" },
  { icon: TrendingUp, value: "200+", label: "Institutions Reached" },
  { icon: Award, value: "85%", label: "Gen-Z Audience" },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">

        {/* Hero */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="section-container text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Partner with Persona Fest 2026
            </h1>
            <p className="text-lg text-gray-600">
              Engage with one of India’s largest student communities at
              MIT ADT University’s flagship techno-cultural festival.
            </p>
          </div>
        </section>

        {/* Why Partner + Download */}
        <section className="py-20 bg-white">
          <div className="section-container">

            {/* Top Row */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-14">

              {/* Left Content */}
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
                  Why Partner With Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  A Platform for Meaningful Brand Engagement
                </h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  Persona Fest offers brands a unique opportunity to connect
                  with young, aspirational audiences through immersive and
                  experiential engagement.
                </p>
              </div>

              {/* Right Actions */}
              <div className="space-y-6 md:justify-self-end max-w-sm">

                {/* Download Button */}
                <a
                  href="/PERSONA_sponsorship-deck.pdf"
                  download
                  className="w-full px-8 py-4 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Sponsorship Deck
                </a>

                {/* Support Text + Contact */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="mb-3">
                    For customized partnership opportunities or further discussion,
                    our team would be happy to connect.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </a>
                </div>

              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-200 rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-md bg-gray-100 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="font-display text-3xl font-semibold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
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

export default Sponsors;
