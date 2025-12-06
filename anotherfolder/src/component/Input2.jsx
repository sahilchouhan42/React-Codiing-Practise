import { useState } from "react"

export default function Input2(){
    const [name, setName] = useState('')
    return(
        <div>
            <h1>Input 2 Component</h1>
            <h1>Name: {name}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}