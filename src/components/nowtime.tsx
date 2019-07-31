//no-unused-vars
import * as React from 'react';
import useTime from '../hooks/usetime';

const Nowtime = () => {
  const times = useTime()
  return (
    <div>
      <div>Now time is {times}</div>
    </div>
  )
}

export default Nowtime;