import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{
        background: theme==='dark'?"#222":"#eee",
        color: theme==='dark'?"white":"black", 
        padding: "20px"
    }}>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Header
