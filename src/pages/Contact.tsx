import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const GOOGLE_SCRIPT_URL = "https://docs.google.com/spreadsheets/d/1obPWW-FNoUzpuDsHhDxUDJP3mF2tz4vLE1XdAYUacMY/edit?usp=sharing";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Message sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">

        {/* Header */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="section-container text-center">
            <h1 className="font-display text-4xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              We’d be happy to assist you with any queries or collaborations.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="section-container grid lg:grid-cols-2 gap-12">

            {/* Left */}
            <div className="space-y-10">

              {/* Contacts */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6 text-gray-900">
                  Contact Information
                </h2>

                <div className="space-y-6 text-gray-600 text-sm">

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Sharvil Vikas Maind</p>
                      <p>+91 72502 98972 </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Dadasaheb Bhosure</p>
                      <p>+91  73873 50049</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 mt-1" />
                    <p>student.success@mituniversity.edu.in</p>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <p>
                      MIT ADT University,<br />
                      Loni Kalbhor, Pune,<br />
                      Maharashtra 412201
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-72 border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=MIT+ADT+University,+Loni+Kalbhor,+Pune&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="font-display text-2xl font-semibold mb-6 text-gray-900">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {["name", "email", "subject"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border rounded-md"
                  />
                ))}

                <textarea
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border rounded-md resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
