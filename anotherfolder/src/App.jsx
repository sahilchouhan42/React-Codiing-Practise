import { useState } from 'react'

import './App.css'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Input1 from './component/Input1'
import Input2 from './component/Input2'
import Password1 from './component/Password1'
import Password2 from './component/Password2'
import Todo1 from './component/Todo1'
import Todo2 from './component/Todo2'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>App Component</h1>
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Input1 /> */}
      {/* <Input2 /> */}
      {/* <Password1 /> */}
      {/* <Password2 /> */}
      {/* <Todo1 /> */}
      <Todo2 />
    </>
  )
}

export default App
