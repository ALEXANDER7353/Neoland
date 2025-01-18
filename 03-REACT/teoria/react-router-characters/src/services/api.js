const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async () => {
    const response = await fetch(`${BASE_URL}/character`)
    const data = await response.json()
    console.log("🚀 ~ getCharacters ~ data:", data)
    return data.results
}

export const getCharacterById = async (id) => {
    const response = await fetch(`${BASE_URL}/character/${id}`)
    const data = await response.json()
    console.log("🚀 ~ getCharacterById ~ data:", data)
    return data
}