/* eslint-disable react/prop-types */
import './App.css'

function Contenedor(props) {

  return (
    <div style={{backgroundColor: 'red', border: '1px solid black', padding: '10px'}}>
      {props.children}
    </div>
  )
}



function App() {
  return (
    <>
    <Contenedor>
      <h1>Hola mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </Contenedor>
    <Contenedor>
      <button>Click me</button>
    </Contenedor>
    </>
  )
}

export default App
