"use client";

//import { tr } from "motion/react-client";
import { useEffect, useState } from "react";

const useClock = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  //  Updates current date.
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date);
  }, []);

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
  const formattedDate = currentDate ? currentDate.toDateString() : "Loading";

  return { formattedDate, currentTime, formattedTime };
};

export default useClock;
