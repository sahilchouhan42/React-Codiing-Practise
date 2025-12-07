import { useState } from "react"

export default function Password1(){

    const [password, setPassword] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function togglePassword(){
        setIsVisible(!isVisible)
    }
    return (
        <div>
            <h1>Password Component 1</h1>
            <input type={ isVisible ? "text" : "password"} placeholder="Enter Password" onChange={handlePassword} />
            <button onClick={togglePassword}>{isVisible ? "HIide": "Show"}</button>
            <h3>Password : {isVisible? password : "●●●●●●"}</h3>
        </div>
    )
}