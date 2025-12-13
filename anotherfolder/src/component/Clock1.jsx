import React, { useEffect, useState } from 'react'

const Clock1 = () => {

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
       const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return ()=> clearInterval(interval)
    }, [])
  return (
    <div>
      <h1>Clock Component 1</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock1
