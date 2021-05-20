import React, { useEffect, useState } from "react";
import classes from "./Landing.css";

const Counter = ({ label, number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3;
    const end = parseInt(number);

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);
  }, [number]);

  return (
    <div className={classes.Counter}>
      <h1>{count} +</h1>
      <h2>{label}</h2>
    </div>
  );
};

export default Counter;
