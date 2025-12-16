import React, { useState } from 'react'

const Modal2 = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <h1>Modal Component 2</h1>
      <br /><br />
      <button onClick={()=>setOpen(true)}>Open Modal</button>
      {
        open && (
            <div onClick={()=>setOpen(false)}>
                <div onClick={(e)=>e.stopPropagation()}>
                    <h3>Hello Modal</h3>
                    <button onClick={()=>setOpen(false)}>Close Modal</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Modal2
