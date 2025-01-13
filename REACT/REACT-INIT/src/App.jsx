import { useState } from 'react'
import './App.css'
import Saludar from './components/Saludar'

function App() {
  // count (Variable para almacenar un valor) setCount (Función para actualizar el valor)
  const [nombre, setNombre ] = useState("")
  const [apellido, setApellido ] = useState("")
  const[contador, setContador] = useState(0)

  return (
    <>
      <input type="text" placeholder="Nombre" onChange={(event)=>setNombre(event.target.value)} />
      <input type="text" placeholder="Apellido" onChange={(event)=>setApellido(event.target.value)} />
      <h1>
  
     <Saludar nombre={nombre} apellido={ apellido} />
      </h1>
      <h2>Contador: {contador}</h2>
      <button onClick={()=>setContador(contador + 1)}>Incrementar</button>
      <button onClick={()=>setContador(contador - 1)}>Decrementar</button>
    </>
  )
}

export default App