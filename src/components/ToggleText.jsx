import React, { useState } from 'react'

const ToggleText = () => {
    const [toggleText, setToggleText] = useState(false)
    const handleToggleText = ()=>{
        setToggleText(!toggleText)
    }
  return (
    <>
      {
        toggleText ? <h1>This is Text</h1>: null
      }
      <br />
      {
        toggleText ? <button onClick={handleToggleText}>Hide Text</button> : <button onClick={handleToggleText}>Show Text</button>
      }
    </>
  )
}

export default ToggleText
