import React, { useState, useEffect } from 'react';

const CountUp = ({end, time}:{end:any, time:any}) => {
  const [count, setCount] = useState(0);
  const endValue = end;
  const duration = time; // duration in milliseconds

  useEffect(() => {
    const incrementTime = duration / endValue;
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endValue) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, incrementTime);
    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <h1 className='md:text-9xl text-5xl font-bold' >{count} +</h1>;
};

export default CountUp;
