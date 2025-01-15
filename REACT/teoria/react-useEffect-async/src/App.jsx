import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const characters = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://rickandmortyapi.com/api/character') // realiza la peticion a la api 
        const dataCharacters = await response.json() // convierte la respuesta a json
        console.log("🚀 ~ characters ~ dataCharacters:", dataCharacters)
        if(dataCharacters.error) {
          setError(true)
          setLoading(false)
          return
        }
        setLoading(false) // setea el estado de loading a false
        setData(dataCharacters) // setea el estado con los datos de la api
      } catch (error) {
        console.log("🚀 ~ characters ~ error:", error)
        setError(true)
      }
    }
    characters()
  }, [])
 if(loading) return <h1>Loading...</h1>
 if(error) return <h1>Error en la peticion de los personajes</h1>
  return (
    <>
      {
        data?.results?.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))
      }
    </>
  )
}

export default App
