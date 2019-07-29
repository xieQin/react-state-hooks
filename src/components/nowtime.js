//no-unused-vars
import React from 'react';
import useTime from './usetime';

const Nowtime = () => {
  const times = useTime()
  return (
    <div>
      <div>Now time is {times}</div>
    </div>
  )
}

export default Nowtime;