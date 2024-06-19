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
      setShowColon(prev => !prev); // Toggle colon visibility
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [showColon]); // Depend on showColon to toggle it

  return (
    <p>
      Douala, Cameroon ({time})
    </p>
  );
};

export default Clock;

