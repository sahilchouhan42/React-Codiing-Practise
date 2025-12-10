import React, { useState } from 'react'

const Input = () => {
    const [input, setInput] =useState('')
  return (
    <>
    <h1>Input Task</h1>

    <input type="text" onChange={(e)=>setInput(e.target.value)} />
    {
        input=== ''? <h2>Nothing to preview</h2> : <h2>{input}</h2>
    }
      <br />
      <br />
      <button onClick={()=>setInput('')}>Clear Input</button>
    </>
  )
}

export default Input
