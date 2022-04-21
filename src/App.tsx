import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function App() {

  const countDownDate = new Date("May 23, 2022 15:37:25").getTime();
  const now = new Date().getTime(); // Get today's date and time

  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds
      })
    }, 1000);

    return () => clearInterval(interval);
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </p>
      </header>
    </div>
  );
}

export default App;
