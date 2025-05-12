"use client";

//import { tr } from "motion/react-client";
import { useEffect, useState } from "react";

const useClock = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  //  Updates current time.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    : "Loading";

  return { currentTime, formattedTime };
};

export default useClock;
