import React, { useState } from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = ()=>{
        setDarkMode(!darkMode)
    }

    const style = {
        backgroundColor: darkMode?'black': 'white',
        color: darkMode? 'white': 'black',
        height: '100vh'
    }
  return (
    <>
      <div style={style}>
        <h1>Current Theme: {darkMode? 'Dark': 'Light'}</h1>
        <button onClick={toggleTheme}>
            {darkMode? "Enable Light Mode": "Enable Dark Mode"}
        </button>
      </div>
    </>
  )
}

export default DarkMode
