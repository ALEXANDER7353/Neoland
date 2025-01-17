import { useEffect, useState } from 'react'
import { getCharacters } from '../services/api'
import Character from './character'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters().then(setCharacters)
    }, [])

    return (
        <div>
            {characters.map((character) => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    )
}

export default CharacterList