import { getCharacterById } from '../services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()
    console.log("🚀 ~ Character ~ id:", id)
    useEffect(() => {
        const fetchCharacter = async () => {
            const character = await getCharacterById(id)
            setCharacter(character)
        }
        fetchCharacter()
    }, [])

    return (
        <div>
            <h1>{character?.name}</h1>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Character