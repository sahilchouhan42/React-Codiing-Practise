import React from 'react'

const Card1 = ({title, description}) => {
  return (
    <div style={{border: "1px solid red", padding: "10px", margin: "10px", width: '400px', height: "200px"}}>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  )
}

export default Card1
