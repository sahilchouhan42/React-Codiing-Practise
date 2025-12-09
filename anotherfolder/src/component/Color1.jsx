import React, { useState } from 'react'

const Color1 = () => {
    const [currentColor, setCurrentColor]= useState('white')

    function changeColor(color){
        setCurrentColor(color)
    }
  return (
    <div style={{backgroundColor: currentColor, padding:"30px"}}>
      <h1>Color Component 1</h1>
      <button style={{backgroundColor: currentColor}} onClick={()=>changeColor("red")}>Red</button>
      <button style={{backgroundColor: currentColor}} onClick={()=>changeColor("blue")}>Blue</button>
      <button style={{backgroundColor: currentColor}} onClick={()=>changeColor("green")}>Green</button>
      <button style={{backgroundColor: currentColor}} onClick={()=>changeColor("yellow")}>Yellow</button>
    </div>
  )
}

export default Color1
