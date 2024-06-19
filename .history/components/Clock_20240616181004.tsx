"use client";

import { useEffect, useState } from 'react';
import { format, toZonedTime } from 'date-fns-tz';

const Clock = () => {
  const [time, setTime] = useState('');
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const timeZone = 'Africa/Douala';

    const updateClock = () => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      const formattedTime = format(zonedTime, `hh${showColon ? ':' : ' '}mm:ss a`, { timeZone });
      setTime(formattedTime);
    };

    const toggleColon = () => {
      setShowColon(prev => !prev);
    };

    updateClock();
    const timeIntervalId = setInterval(updateClock, 1000);
    const colonIntervalId = setInterval(toggleColon, 1000);

    return () => {
      clearInterval(timeIntervalId);
      clearInterval(colonIntervalId);
    };
  }, [showColon]); // Only toggle colon

  return (
    <p>
      Douala, Cameroon ({time})
    </p>
  );
};

export default Clock;


