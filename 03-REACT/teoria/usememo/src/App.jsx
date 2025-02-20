import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const expensiveCalculation = useMemo(() => {
    console.log('Calculo costoso')
    return count * 10
  }, [count])

  return (
    <>

      <h1>Resultado: {expensiveCalculation}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type='text' defaultValue={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
