import React, { useState } from 'react'

const Todo1 = () => {
    const [task, setTask] = useState("")
    const [todoList, setTodoList] = useState([])

    function handleInput(e){
        setTask(e.target.value)
    }

    function addTask(){
        if(task.trim()==="") return;
        setTodoList([...todoList, task])
        setTask('')
    }

    function deleteTask(index){
        const newList = todoList.filter((_,i)=>i!==index)
        setTodoList(newList)
    }
  return (
    <div>
        <h1>Todo Component 1</h1>
      <input type="text" value={task} placeholder='Enter Task' onChange={handleInput}/>
      <br />
      <br />
      <button onClick={addTask}>Add Task</button>
      <br />
      <br />
      <ul>
        {
            todoList.map((item, index)=>(
                <li key={index}>{item}
                <button onClick={()=>deleteTask(index)}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todo1
