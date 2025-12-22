import React, { Children, useState } from 'react'
import ThemeContext from './ThemeContext'
import Header from './Header'

const ThemeProvider = () => {
    const [theme, setTheme] = useState("light")

    function toggleTheme(){
        setTheme(theme==='light'?"dark": "light")
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Header />
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
