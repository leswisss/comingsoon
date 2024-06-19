"use client";

import { useEffect, useState } from 'react';
import { format, toZonedTime } from 'date-fns-tz';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timeZone = 'Africa/Douala';
    
    const updateClock = () => {
      const now = new Date();
      const zonedTime = utcToZonedTime(now, timeZone);
      const formattedTime = format(zonedTime, 'hh:mm a', { timeZone });
      setTime(formattedTime);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p>
      Douala, Cameroon ({time})
    </p>
  );
};

export default Clock;
