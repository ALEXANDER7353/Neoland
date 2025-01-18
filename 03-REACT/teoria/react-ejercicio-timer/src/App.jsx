import { useEffect, useState } from 'react'
import './App.css'



function App() {
 const [time, setTime] = useState(new Date ())

useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <h1>Hora Actual 🌞🌚 :{time.toLocaleTimeString()}</h1>
    </>

  )
}

export default App
