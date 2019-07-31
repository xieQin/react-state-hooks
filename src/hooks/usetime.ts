import * as React from 'react';
import { useState, useEffect } from 'react';

const useTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      console.log('cleanup', id)
      clearInterval(id)
    }
  })
  return [time, setTime]
}

export default useTime