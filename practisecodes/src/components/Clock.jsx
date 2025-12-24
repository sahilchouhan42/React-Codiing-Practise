// import React from 'react'
// import { useRef } from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const Clock = () => {
//     const [time, setTime] = useState(new Date())
//     const internalRef = useRef(null)

//     useEffect(()=>{
//         internalRef.current = setInterval(()=>{
//             setTime(new Date())
//         }, 1000)

//         return ()=>clearInterval(internal.current)
//     }, [])

//   return (
//     <div>
//       <h1>Clock: {time.toLocaleTimeString()}</h1>
//       <button onClick={()=>clearInterval(internalRef.current)}>Stop Clock</button>
//     </div>
//   )
// }

// export default Clock


import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const stopClock = () => {
    clearInterval(intervalRef.current)
  }

  return (
    <div>
      <h1>Clock: {time.toLocaleTimeString()}</h1>
      <button onClick={stopClock}>Stop Clock</button>
    </div>
  )
}

export default Clock
