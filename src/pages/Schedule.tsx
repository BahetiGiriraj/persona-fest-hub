import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, MapPin } from "lucide-react";

const scheduleData = {
  day1: {
    date: "19 Feb 2026",
    title: "Day 1 - Ignition",
    events: [
      { time: "09:00", title: "Opening Ceremony", venue: "Main Arena", category: "cultural", duration: "2h" },
      { time: "11:00", title: "CodeCraft - Coding Competition", venue: "Tech Hub", category: "technical", duration: "4h" },
      { time: "11:30", title: "Dance Wars - Prelims", venue: "Cultural Center", category: "cultural", duration: "3h" },
      { time: "14:00", title: "Design Sprint Kickoff", venue: "Design Lab", category: "design", duration: "6h" },
      { time: "15:00", title: "B-Plan Competition", venue: "Seminar Hall", category: "management", duration: "3h" },
      { time: "18:00", title: "Chef's Table - Round 1", venue: "Food Court", category: "foodtech", duration: "2h" },
      { time: "20:00", title: "Pro Night - DJ Performance", venue: "Main Arena", category: "cultural", duration: "3h" },
    ],
  },
  day2: {
    date: "20 Feb 2026",
    title: "Day 2 - Momentum",
    events: [
      { time: "09:00", title: "HackNova - 24hr Hackathon Begins", venue: "Tech Hub", category: "technical", duration: "24h" },
      { time: "10:00", title: "RoboRace Trials", venue: "Robotics Arena", category: "technical", duration: "4h" },
      { time: "10:30", title: "Short Film Screening", venue: "Auditorium", category: "manet", duration: "3h" },
      { time: "12:00", title: "Dance Wars - Finals", venue: "Main Arena", category: "cultural", duration: "4h" },
      { time: "14:00", title: "Corporate Debate Finals", venue: "Seminar Hall", category: "management", duration: "3h" },
      { time: "16:00", title: "Photography Walk", venue: "Campus", category: "design", duration: "2h" },
      { time: "19:00", title: "Battle of Bands", venue: "Main Arena", category: "cultural", duration: "4h" },
    ],
  },
  day3: {
    date: "21 Feb 2026",
    title: "Day 3 - Crescendo",
    events: [
      { time: "09:00", title: "HackNova Judging", venue: "Tech Hub", category: "technical", duration: "3h" },
      { time: "10:00", title: "Nukkad Natak Finals", venue: "Open Grounds", category: "cultural", duration: "3h" },
      { time: "11:00", title: "Animation Challenge Finals", venue: "Design Lab", category: "manet", duration: "2h" },
      { time: "13:00", title: "Food Tech Expo", venue: "Food Court", category: "foodtech", duration: "4h" },
      { time: "15:00", title: "Awards Ceremony", venue: "Main Arena", category: "cultural", duration: "2h" },
      { time: "18:00", title: "Closing Ceremony", venue: "Main Arena", category: "cultural", duration: "1h" },
      { time: "19:30", title: "Star Night - Celebrity Performance", venue: "Main Arena", category: "cultural", duration: "4h" },
    ],
  },
};

const categoryColors: Record<string, string> = {
  cultural: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  technical: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  design: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  management: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  foodtech: "bg-green-500/20 text-green-400 border-green-500/30",
  manet: "bg-red-500/20 text-red-400 border-red-500/30",
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "day3">("day1");
  const schedule = scheduleData[activeDay];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-30" />
          <div className="relative section-container text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Event <span className="gradient-text">Schedule</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Three days of non-stop action. Plan your Persona experience.
            </p>
          </div>
        </section>

        {/* Day Tabs */}
        <section className="py-8 sticky top-16 z-40 glass-nav">
          <div className="section-container">
            <div className="flex justify-center gap-2 md:gap-4">
              {(["day1", "day2", "day3"] as const).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 py-3 rounded-xl font-display font-semibold transition-all duration-300 ${
                    activeDay === day
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      : "glass-card hover:bg-muted/50"
                  }`}
                >
                  <span className="hidden sm:inline">{scheduleData[day].title}</span>
                  <span className="sm:hidden">{scheduleData[day].date}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Content */}
        <section className="py-12">
          <div className="section-container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-bold">{schedule.title}</h2>
              <p className="text-muted-foreground">{schedule.date}</p>
            </div>

            <div className="space-y-4">
              {schedule.events.map((event, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 flex flex-col md:flex-row md:items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-center gap-4 md:w-32 flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-display font-semibold">{event.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                      <span className="text-muted">•</span>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[event.category]}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-12">
          <div className="section-container max-w-4xl">
            <h3 className="font-display font-semibold mb-4 text-center">Event Categories</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(categoryColors).map(([category, colors]) => (
                <span key={category} className={`px-4 py-2 rounded-full text-sm border ${colors}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
