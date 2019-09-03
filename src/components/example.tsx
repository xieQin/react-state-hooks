import * as React from 'react';
import { useState, useEffect } from 'react';
import Nowtime from './nowtime'
import { useStore } from '../models'
import axios from 'axios'

interface Iitem {
  objectID: number,
  url: string,
  title: string
}

const Example = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(100);
  const [state, actions] = useStore('Test')
  console.log(state, actions, 'example')

  const [data, setData] = useState({ hits: [] });
  useEffect (() => {
    document.title = `You clicked ${count} times`
  });

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  });

  return (
    <div>
      <Nowtime/>
      <p onClick={() => actions.modify('hhhhh')}>{state.text}</p>
      <p>You Clicked {count} times, Nums is {nums}</p>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
      <button onClick={() => setNums(nums - 1)}>delete nums</button>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Example;
