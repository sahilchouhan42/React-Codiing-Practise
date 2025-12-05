import { useState } from "react"

export default function Counter1(){
    const [count, setCount] = useState(0)

    function increase(){
        setCount(count + 1)
    }

    function decrease(){
        setCount(count-1)
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}