import { useState } from "react"

export default function Counter2(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </div>
    )
}