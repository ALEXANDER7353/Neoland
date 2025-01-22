
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import { useState } from 'react'

function App() {
 const [url, setUrl] = useState("")
 const {data, error, loading} = useFetch(url)



  if(loading  ) return <h1>Loading...</h1>
  if(error ) return <h1>Error en la peticion de los personajes</h1>

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input onChange={(e)=>setUrl(e.target.value)} defaultValue={url}/>
      <div className="card">

      {
        data?.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))
      }
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
