import React, { useReducer } from 'react'

const CounterReducer2 = () => {

    const reducer = (state, action)=>{
        switch(action.type){
            case "inc": return {count: state.count+1};
            case "dec": return {count: state.count-1};
            case "res": return {count: 0};
            default: return state
        }
    }
    const[{count}, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type: "inc"})}>Inrease</button>
      <button onClick={()=>dispatch({type: "dec"})}>Decrease</button>
      <button onClick={()=>dispatch({type: "res"})}>Reset</button>
    </div>
  )
}

export default CounterReducer2
