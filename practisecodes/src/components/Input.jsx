import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState('')

    // function handleInput(e){
    //     setInput(e.target.value)
    // }
  return (
    <div>
      {/* <input type="text" onChange={handleInput}/> */}
      <input type="text" onChange={(e)=>setInput(e.target.value)}  />
      <br /><br />
      <h2>{input}</h2>
    </div>
  )
}

export default Input
