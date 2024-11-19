export function crearPokemonInfoCards(pokemon) {
  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
        
          <h3>${pokemon.name}</h3>
  
         
          <img src="${pokemon.sprites.front_default}" >
  
         
          <p>${pokemon.types.map((typeElement) => typeElement.type.name)}</p>
      `;

  return card;
}
