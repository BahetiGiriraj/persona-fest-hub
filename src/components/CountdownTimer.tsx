import { useState, useEffect } from "react";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const targetDate = new Date("2026-02-19T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6">
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-6">
          <div className="text-center">
            <div className="bg-white rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px] shadow-sm">
              <span className="font-display text-2xl md:text-4xl font-bold text-primary">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-white/80 text-xs md:text-sm uppercase tracking-wider mt-2 block">
              {unit.label}
            </span>
          </div>
          {index < timeLeft.length - 1 && (
            <span className="text-white/60 text-2xl md:text-3xl font-light hidden sm:block">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
