import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">

        {/* HERO */}
        <section className="relative py-32 text-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
  
  {/* soft glow */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-4xl mx-auto px-4">
    <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
      Persona Fest 2026
    </h1>

    <div className="mt-6 w-24 h-1 bg-white/80 mx-auto rounded-full" />

    <p className="mt-6 text-lg md:text-xl text-white/90">
      Registration forms will be out soon
    </p>
  </div>
</section>

        {/* WORKSHOPS */}
        <section className="py-20 bg-white text-center">
          <h2 className="section-title">Workshops</h2>
          <p className="section-subtitle mt-4">
            Workshop details will be added soon
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Register;
