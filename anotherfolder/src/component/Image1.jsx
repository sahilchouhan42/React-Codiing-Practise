import React, { useState } from 'react'

const Image1 = () => {
    const [imageURL, setImageURL] = useState(null)

    function handleImage(e){
        const file = e.target.files[0]
        if(file){
            const url = URL.createObjectURL(file)
            setImageURL(url)
        }
    }

    function removeImage(){
        setImageURL(null)
    }
  return (
    <div>
      <h1>Image Component 1</h1>
      <br /><br />
      <input type="file" onChange={handleImage} />
      {
        imageURL && (
            <div>
                <img src={imageURL} width={"200"} style={{marginTop: "10px"}} />
                <br /><br />
                <button onClick={removeImage}>Remove</button>
            </div>
        )
      }
    </div>
  )
}

export default Image1
