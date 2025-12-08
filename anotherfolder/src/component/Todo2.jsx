import React, { useState } from 'react'

const Todo2 = () => {
    const [task, setTask] = useState('')
    const [todoList, setTodoList] = useState([])
  return (
    <div>
      <h1>Todo Component 2</h1>
      <br /><br />
      <input type="text" value={task} placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
      <br /><br />
      <button onClick={()=>{
        if(!task.trim()) return;
        setTodoList([...todoList, task])
        setTask('')
      }}>Add Task</button>
      <br /><br />
      <ul>
        {
            todoList.map((item,i)=>(
                <li key={i}>
                    {item}
                    <button onClick={()=>setTodoList(todoList.filter((_, x)=>x!==i))}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todo2
