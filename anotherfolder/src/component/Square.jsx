import React, { useMemo, useState } from 'react'

const Square = () => {
    const [number, setNumber] = useState()
    const [count, setCount]=useState(0)

    const square = useMemo(()=>{
        console.log('Calculate square')
        return number*number
    }, [number])
  return (
    <div>
      <h2>Square : {square}</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))}/>
      <br /><br />
      <button onClick={()=>setCount(count+1)}>Counter :{count}</button> 
      <br /><br />
      <button onClick={()=>setNumber()}>Reset</button>
    </div>
  )
}

export default Square
