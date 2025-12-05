import { useState } from 'react'

import './App.css'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>App Component</h1>
      {/* <Counter1 /> */}
      <Counter2 />
    </>
  )
}

export default App
