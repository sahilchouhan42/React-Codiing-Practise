import React, { useEffect, useState } from 'react'

const Clock2 = () => {
    const [time, setTime]=useState('')

    useEffect(()=>{
      const interval=  setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return ()=>clearInterval(interval)
    }, [])
  return (
    <div>
      <h1>Clock 2 Component</h1>
      <h2>{time}</h2>
    </div>
  )
}

export default Clock2
