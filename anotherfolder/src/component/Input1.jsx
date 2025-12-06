import { useState } from "react"

export default function Input1(){
    const [name, setName] = useState('')

    function handleInput(event){
        const value = event.target.value;
        setName(value)
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <br />
            <input type="text" onChange={handleInput} />

        </div>
    )
}