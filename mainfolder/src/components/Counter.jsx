    import React, { useState } from 'react'

    const Counter = () => {
        const [count, setCount] = useState(0)
    return (
        <>
        <h1>Count: {count}</h1>
        <br />
        <button onClick={()=>(setCount(count + 1))}>Increase Count</button>
        <br />
        {
            count > 0 ? <button onClick={()=>(setCount(count-1))}>Decrease Count</button> : null
        }
        </>
    )
    }

    export default Counter
