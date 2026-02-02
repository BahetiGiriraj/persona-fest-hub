import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryStyles = {
  "Business Games": "border-indigo-500",
  "Competitions": "border-pink-500",
  "Cultural Events": "border-purple-500",
  "Flea Market Stalls": "border-yellow-500",
  "Fun Games": "border-orange-500",
  "Technical Events": "border-blue-500",
  "Workshops": "border-green-500",
};

const eventCategories = [
  {
    title: "Business Games",
    events: [
      "Ad-Vantage: Design the Dream Job",
      "What The Meme!",
      "The Pitchers",
      "Case Mania",
      "Mock Stock",
    ],
  },
  {
    title: "Competitions",
    events: [
      "Shoot, Edit, Educate! (Reel Making)",
      "Education Through Lenses – Meme Making",
      "BGMI LAN Tournament",
      "UAV / Drone Simulator",
      "Alfaz – Self Composed Poem",
      "Open Mic – Multilingual",
      "4×4 Rally",
      "The Great Food Hunt",
      "BuildX",
      "National Level Online Photography",
      "On-the-Spot Landscape",
      "Durga-Vaibhav Spardha (Killa Making)",
      "Storyboard Jumble",
      "Film and Book Review",
      "Capture Persona 2026 & Revive 2016 Memories",
      "Roborace",
      "Game of Greed",
      "The LAP Initiative",
      "Digital Film Poster Making",
      "YOUNG FRAMES 2026 (24-Hour Short Film)",
      "Mehfil",
      "Rangeela Bookmark Painting",
      "Project Eleven",
      "Masterchef 2.0",
      "Food Shark Tank",
      "Forge of Strength",
      "RC Aircraft Competition",
    ],
  },
  {
    title: "Cultural Events",
    events: [
      "Rhydhun – Instrumental Competition",
      "Crescendo – Western Singing",
      "Show Stopper",
      "Vishwadhun",
      "Ghoongruh – Classical Dance",
      "Step-Up – Solo Dance",
      "Trance – Group Dance",
      "Saptasur",
      "Rangmanch",
    ],
  },
  {
    title: "Flea Market Stalls",
    events: ["Flea Market"],
  },
  {
    title: "Fun Games",
    events: [
      "PopCon (Popular Culture Cosplay)",
      "Silent DJ",
      "Slip ’n Slide",
      "OpenMic_ft.MANET",
      "Sci-Fi Tech Mystery Rooms",
      "BOX CRICKET",
      "CAMPX (Campus Endurance Series)",
      "LUDO LAND",
      "SQUID GAMES 2.0",
    ],
  },
  {
    title: "Technical Events",
    events: [
      "ISHRAE TechQuest",
      "CodeHunter",
      "TAG Venture 2.0 – Treasure Hunt by AWS Cloud Club",
      "CodeCraft",
      "CADD-War",
    ],
  },
  {
    title: "Workshops",
    events: [
      "Traditional Phad Art Workshop",
      "Dhokra Art Workshop",
    ],
  },
];

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">

        {/* HERO */}
        <section className="py-28 text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold">
            Persona Fest 2026
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Register for events, competitions & workshops
          </p>

          <div className="mt-10">
            <a
              href="https://forms.easebuzz.in/sign-up/MITWXY4M/PERSONA_FEST_2026/?inst_name=MITWXY4M&form_name=PERSONA_FEST_2026&jsonData=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-indigo-700 font-semibold rounded-md shadow-lg hover:bg-white/90 transition"
            >
              Register Now
            </a>
          </div>
        </section>

        {/* EVENTS */}
        <section className="py-20 bg-white">
          <div className="section-container space-y-16">

            {eventCategories.map((category) => (
              <div
                key={category.title}
                className={`border-l-4 ${categoryStyles[category.title]} bg-gray-50 rounded-xl p-6`}
              >
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  Explore events under this category
                </p>

                <div className="flex flex-wrap gap-3">
                  {category.events.map((event) => (
                    <div
                      key={event}
                      className="px-4 py-2 rounded-full bg-white border text-sm font-medium text-gray-800 hover:bg-accent hover:text-white transition cursor-pointer"
                    >
                      {event}
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* NOTE */}
        <section className="py-10 bg-gray-50 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            Event schedules, fees, rules, and prizes will be shared soon.
            Please complete registration to receive official updates.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Register;
