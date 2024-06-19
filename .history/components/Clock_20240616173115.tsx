"use client";

import { useEffect, useState } from 'react';
import { format,  } from 'date-fns-tz';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const timeZone = 'Africa/Abidjan';
      const zonedTime =toZonedTime(new Date(), timeZone);
      const formattedTime = format(zonedTime, 'hh:mm aa', { timeZone });
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
