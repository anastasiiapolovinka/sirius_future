import React, { useState, useEffect, FC } from 'react';

interface ClockProps {
  targetDate: Date
};

interface TimeLeft {
  days?: number,
  hours?: number,
  minutes?: number,
};

const Clock: FC<ClockProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <span className="clock-numbers">{String(timeLeft.days).padStart(2, '0')}<span  className="clock-initial">д</span> </span>
      <span className="clock-numbers">{String(timeLeft.hours).padStart(2, '0')}<span className="clock-initial">ч</span>  </span>
      <span className="clock-numbers">{String(timeLeft.minutes).padStart(2, '0')}<span className="clock-initial">мин</span> </span>
    </div>
  );
};

export default Clock;