"use client";

import { useState, useEffect } from "react";

interface DaysCounterProps {
  startDate: Date;
}

export default function DaysCounter({ startDate }: DaysCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const diffTime = today.getTime() - startDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();

    // Update at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      calculateDays();
      // Then update every 24 hours
      const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
      return () => clearInterval(interval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, [startDate]);

  return (
    <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
      <span className="text-2xl font-bold text-pink-600">{days}</span>
      <span className="text-sm text-pink-500">days 💕</span>
    </div>
  );
}
