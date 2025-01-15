import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  // Definimos la fecha y hora actual con Date
  // la funcion setTime actualiza el estado de time
  useEffect(() => {
    const interval = setInterval(() => { // Definimos un intervalo de tiempo
      setTime(new Date()) // actualizamos el estado cada 1 segundo
    }, 1000) // actualizamos el estado cada 1 segundo
    
    console.log("🚀 ~ interval ~ interval:", interval)
    return () => clearInterval(interval) // limpiamos el intervalo
  }, [])

  return (
    <>
      <h1>Hora actual: {time.toLocaleTimeString()}</h1>
    </>
  )
}

export default App
