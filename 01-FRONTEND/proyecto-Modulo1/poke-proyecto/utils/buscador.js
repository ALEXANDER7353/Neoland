export async function buscarPokemon(query) {
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Pokemon no encontrado");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error.message);
        return null;
    }
}
