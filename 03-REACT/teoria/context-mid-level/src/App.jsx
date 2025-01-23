import { useState, createContext, useContext } from 'react'

import './App.css'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme =()=>{
    setTheme((prev)=> prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Header/>
    </ThemeContext.Provider>

    </>
  )
}


function Header() {
  return <Navbar />;
}

function Navbar() {
  return <Button />;
}

function Button() {

  const {theme, toggleTheme} = useContext(ThemeContext)
  console.log("🚀 ~ Button ~ theme:", theme)

  return <button style={{background: `${theme === 'dark' ? '#242424': '#FFFFFF'}`}} onClick={toggleTheme}>{theme === 'dark' ? 'CAMBIAR A MODO NORMAL': ' CAMBIAR A MODO OSCURO'}</button>
  
}

export default App
