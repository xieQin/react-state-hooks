import * as React from 'react';
import useTime from '../hooks/usetime';

const Nowtime = () => {
  const [time, setTime] = useTime()
  return (
    <div>
      <div>Now time is {time}</div>
    </div>
  )
}

export default Nowtime;