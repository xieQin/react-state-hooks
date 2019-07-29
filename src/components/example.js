import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(100);
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect (() => {
    document.title = `You clicked ${count} times`
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  });
  return (
    <div>
      <p>You Clicked {count} times, Nums is {nums}</p>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
      <button onClick={() => setNums(nums - 1)}>delete nums</button>
      <p>Now Time is {time}</p>
    </div>
  )
}

export default Example;
