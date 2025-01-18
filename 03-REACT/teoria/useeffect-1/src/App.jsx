import { useState , useEffect} from 'react'
import './App.css'


function Counter() {

  const [count, setCount] = useState(0)

  useEffect(() => { 
    // useEffect gestiona el ciclo de vida del componente
    // Este hook se ejecuta cada vez que se monta o actualiza el componente
    console.log('Counter mounted')

    return () => {
      // Esto se ejecuta cuando el componente se desmonta
      // Se encarga de limpiar los recursos que se hayan creado
      console.log('Counter unmounted')
    }
  }, [])


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

function App() {

  const [showCounter, setShowCounter] = useState(false)

  return (
    <>
    {showCounter && <Counter />}
    <button onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button>
    </>
  )
}

export default App
