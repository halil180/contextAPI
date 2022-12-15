import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SomeComponent from './SomeComponent'
import {ThemeContextProvider } from './context/ThemeContext';
import ButtonComp from './ButtonComp';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <ButtonComp/>
        <SomeComponent/>
      </ThemeContextProvider>
    </div>
  )
}

export default App
