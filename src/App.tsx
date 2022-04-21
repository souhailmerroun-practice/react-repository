import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Stopwatch {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function App() {

  const [time, setTime] = useState(50000); //50000 miliseconds = 50 seconds

  const [countdown, setCountdown] = useState<Stopwatch>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {

      setTime(time + 1000);

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000)

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
