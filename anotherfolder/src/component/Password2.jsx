import { useState } from "react"

export default function Password2(){

    const [password, setPassword] = useState('')
    const [isVisible, setIsVisible]= useState(false)

    return (
        <div>
            <h1>Password Component 2</h1>
            <input type={isVisible ? "text": "password"} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={()=>setIsVisible(!isVisible)}>{isVisible ? "Hide": "Show"}</button>
            <h2>Password: {isVisible?password:"●●●●●●"}</h2>
        </div>
    )
}