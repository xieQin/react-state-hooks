import React, { useState, useEffect } from 'react';
import Nowtime from './nowtime'
// import { useStore } from '../models/index'

const Example = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(100);
  // const [state, actions] = useStore('Test')
  // console.log(state, actions)
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
