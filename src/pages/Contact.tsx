import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">

        {/* HERO */}
        <section className="py-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
          <div className="section-container text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Have a question, collaboration idea, or need assistance?
              We’re here to help you.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 bg-gray-50">
          <div className="section-container grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT – CONTACT DETAILS */}
            <div className="space-y-10">

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 text-gray-700 text-sm">

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 text-indigo-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Sharvil Vikas Maind
                      </p>
                      <p>+91 72502 98972</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 text-indigo-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Dadasaheb Bhosure
                      </p>
                      <p>+91 73873 50049</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 text-indigo-600" />
                    <p>student.success@mituniversity.edu.in</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-indigo-600" />
                    <p>
                      MIT ADT University,<br />
                      Loni Kalbhor, Pune,<br />
                      Maharashtra – 412201
                    </p>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-4">
                    Follow Us
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/mitadtpersonafest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md border flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>

                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md border flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – MAP */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm h-[420px]">
              <iframe
                title="MIT ADT University Location"
                src="https://www.google.com/maps?q=MIT+ADT+University,+Loni+Kalbhor,+Pune&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
