import React, { useState, useEffect } from 'react';
import Nowtime from './nowtime'

const Example = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(100);
  useEffect (() => {
    document.title = `You clicked ${count} times`
  });
  return (
    <div>
      <Nowtime/>
      <p>You Clicked {count} times, Nums is {nums}</p>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
      <button onClick={() => setNums(nums - 1)}>delete nums</button>
    </div>
  )
}

export default Example;
