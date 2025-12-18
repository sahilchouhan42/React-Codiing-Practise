import React from 'react'

const Card1 = ({inc, dec}) => {
  return (
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>dec</button>
    </div>
  )
}

export default Card1
