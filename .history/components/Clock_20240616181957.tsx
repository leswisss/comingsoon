"use client";

import { useEffect, useState } from 'react';
import { format, toZonedTime } from 'date-fns-tz';
import styles from "../styles/clock.module.scss"

const Clock = () => {
  const [time, setTime] = useState('');
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const timeZone = 'Africa/Douala';

    const updateClock = () => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      const formattedTime = format(zonedTime, 'hh:mm a', { timeZone });
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
  }, []);
  console.log(time)

  return (
    <p className={styles.time}>
      Douala, Cameroon ({time.slice(0, 2)}
      <span className={showColon ? '' : styles.blink}>:</span>
      {time.slice(3)})
    </p>
  );
};

export default Clock;


