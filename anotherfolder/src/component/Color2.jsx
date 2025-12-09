import React, { useState } from 'react'

const Color2 = () => {
    const [color, setColor] = useState("white")
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'pink']
  return (
    <div style={{backgroundColor: color}}>
      <h1>Color Component 2</h1>
      {
        colors.map((c)=>(
            <button key={c} onClick={()=>setColor(c)}>{c}</button>
        ))
      }
      <h2>Current Color: {color}</h2>
    </div>
  )
}

export default Color2
