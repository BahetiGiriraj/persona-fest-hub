import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">

        {/* Page Intro */}
        <section className="py-16 border-b border-gray-200 bg-gray-50">
          <div className="section-container text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              About Persona Fest
            </h1>
            <p className="text-lg text-gray-600">
              The flagship techno-cultural festival of MIT ADT University.
            </p>
          </div>
        </section>

        {/* Visual Break
        <section className="bg-white py-12">
          <div className="section-container">
            <div className="w-full h-[320px] md:h-[400px] overflow-hidden rounded-lg border border-gray-200">
              <img
                src="/Persona2026.png"
                alt="Persona Fest at MIT ADT University"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section> */}

        {/* About + Stats */}
        <section className="py-20 bg-white">
          <div className="section-container grid md:grid-cols-2 gap-12 items-center">

            {/* Text + Stats */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Persona Fest brings together technology, culture, and creativity on a
                single platform. Hosted annually at MIT ADT University, the festival
                attracts students from institutions across Maharashtra and India.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="font-display text-3xl font-semibold text-gray-900">
                    11,000+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Participants</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-gray-900">
                    125+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Institutions</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-gray-900">
                    120+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Eminent Guests</p>
                </div>
              </div>
            </div>

            {/* Supporting Image */}
            <div className="w-full h-[280px] overflow-hidden rounded-lg border border-gray-200">
              <img
                src="/Persona2026.png"
                alt="Persona Fest Experience"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* Events Overview */}
        {/* <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
          <div className="section-container max-w-4xl text-center">
            <p className="text-gray-600 text-lg">
              The festival features events across{" "}
              <strong>Technology, Culture, Design, Management, Food Technology</strong>{" "}
              and <strong>MANET</strong>, along with workshops, exhibitions, and
              competitive showcases.
            </p>
          </div>
        </section> */}

        {/* Leadership */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
              Leadership
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

              {/* Prof. Dr. Vishwanath D. Karad */}
              <div className="flex gap-6">
                <img
                  src="/Dr.Karad.png"
                  alt="Prof. Dr. Vishwanath D. Karad"
                  className="w-32 h-40 object-cover rounded-md border border-gray-200"
                />
                <div>
                  <h3 className="font-display font-semibold text-gray-900">
                    Prof. Dr. Vishwanath D. Karad
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Founder, Executive President & Managing Trustee<br />
                    MIT ADT University, Pune
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Persona Fest reflects the university’s commitment to holistic
                    education and student development beyond classrooms.
                  </p>
                </div>
              </div>

              {/* Prof. Dr. Mangesh T. Karad */}
              <div className="flex gap-6">
                <img
                  src="/DrMangesh.png"
                  alt="Prof. Dr. Mangesh T. Karad"
                  className="w-32 h-40 object-cover rounded-md border border-gray-200"
                />
                <div>
                  <h3 className="font-display font-semibold text-gray-900">
                    Prof. Dr. Mangesh T. Karad
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Executive President & Pro-Chancellor<br />
                    MIT ADT University, Pune
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Persona Fest serves as a platform for collaboration, innovation,
                    and national-level student engagement.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
