import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function SomeComponent() {
  const {darkTheme} = useContext(ThemeContext)

  const themeStyles  = {
    color: darkTheme ? "#333" : "#CCC"
  }
  return (
    <div style={themeStyles}>SomeComponent</div>
  )
}

export default SomeComponent