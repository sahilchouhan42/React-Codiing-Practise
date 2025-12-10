import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState([])

    const handleinput = (e)=>{
        setInput(e.target.value)
        console.log(input)
    }

    const handleTodo = ()=>{
        if(input.trim()==='') return
        setTodo([...todo, input])
        setInput('')
        console.log(todo)

    }

  return (
    <>
      <h1>To-do List</h1>
      <input type="text" onChange={handleinput} placeholder='Add Todo' value={input} />
      <button onClick={handleTodo} >Add Todo</button>

      <br /><br />
      {
        todo.length===0? <h3>No todos added yet</h3> : <ul>
            {
                todo.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
      }
    </>
  )
}

export default TodoList
