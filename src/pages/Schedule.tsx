import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Full Page Image Section */}
      <main className="pt-28 flex-1">
        <div className="w-full h-full">
         <img
  src="/Schedule.png"
  alt="Event Schedule"
  className="
    w-full
    object-contain
    h-auto
    max-h-[70vh]
    md:max-h-[80vh]
    lg:max-h-[calc(100vh-7rem)]
    mx-auto
  "
/>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
