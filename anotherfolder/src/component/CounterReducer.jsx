import React, { useReducer } from 'react'

const CounterReducer = () => {

    function reducer(state, action){
        if(action.type==='Increase'){
            return {count: state.count+1}
        }
        if(action.type==='Decrease'){
            return {count: state.count-1}
        }
        if(action.type==='Reset'){
            return {count: 0}
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type: "Increase"})}>Increase</button>
      <button onClick={()=>dispatch({type: "Decrease"})}>Decrease</button>
      <button onClick={()=>dispatch({type: "Reset"})}>Reset</button>
    </div>
  )
}

export default CounterReducer
