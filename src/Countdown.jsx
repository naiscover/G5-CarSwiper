import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  // 8 hours in seconds
  const [secondsLeft, setSecondsLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    if (secondsLeft <= 0) return; // stop timer when 0

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Convert seconds to HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", color: "white" }}>
      {formatTime(secondsLeft)}
    </div>
  );
}
