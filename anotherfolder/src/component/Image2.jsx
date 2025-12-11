import React, { useState } from 'react'

const Image2 = () => {
    const [img, setImg] = useState(null)
  return (
    <div>
      <h1>Image Component 2</h1>
      <br /><br />
      <input type="file" onChange={(e)=>{
        const file = e.target.files[0];
        if(file) setImg(URL.createObjectURL(file))
      }} />
      <br /><br />
      {
        img && (
            <div>
            <img src={img} width={'200'} />
            <br /><br />    
            <button onClick={()=>setImg(null)}>Remove</button>
            </div>
        )
      }
    </div>
  )
}

export default Image2
