const API_URL = "https://pokeapi.co/api/v2";
let pokemons = [];
let tiposUnicos = new Set(); // Corregido: "set" debe estar en mayúscula ("Set").

export async function obtenerPokemons() {
  try {
    let nextUrl = `${API_URL}/pokemon?limit=100`; // Corregido: Añadido "/" entre la base y el endpoint.
    let pokemonsBatch = [];

    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error(`Error al cargar Pokemons: ${response.statusText}`);

      const data = await response.json();
      nextUrl = data.next; // Actualiza el nextUrl con la URL de la siguiente página.

      const pokemonPromises = data.results.map(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url);
        if (!pokemonData.ok) throw new Error(`Error al cargar detalles de Pokemon: ${pokemonData.statusText}`);

        const pokemonDetails = await pokemonData.json();
        return {
          name: pokemonDetails.name,
          type: pokemonDetails.types.map((t) => t.type.name), // Obtiene los tipos del Pokémon.
          image: pokemonDetails.sprites.front_default, // Obtiene la URL de la imagen.
        };
      });

      pokemonsBatch = await Promise.all(pokemonPromises); // Espera a que se resuelvan todas las promesas.
      pokemons = [...pokemons, ...pokemonsBatch];
    }

    cargarTipos();
    mostrarPokemons(pokemons);
  } catch (error) { // Corregido: Cambio de "Error" a "error" en el parámetro del catch.
    console.error("Error al obtener los Pokemon:", error); // Corregido: Cambio de "error" a "error" en el mensaje.
    const pokemonContainer = document.getElementById("pokemon-container"); // Corregido: Se añadió esta línea porque "pokemonContainer" no estaba definido.
    pokemonContainer.innerHTML = "<p> Hubo un problema al cargar los pokemons, intenta de nuevo más tarde </p>"; // Corregido: Ajuste menor en el texto del mensaje.
  }
}

export function cargarTipos() {
  pokemons.forEach(pokemon => {
    pokemon.type.forEach(tipo => tiposUnicos.add(tipo));
  });
  const tiposOrdenados = Array.from(tiposUnicos).sort();

  const typeFilter = document.getElementById("type-filter");
  typeFilter.innerHTML = "<option value=''>Filtrar por Tipo</option>"; // Corregido: Ajuste en el formato de las comillas.

  tiposOrdenados.forEach(tipo => {
    const option = document.createElement("option");
    option.value = tipo;
    option.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    typeFilter.appendChild(option);
  });
}

export function mostrarPokemons(pokemonsFiltrados) {
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";
  if (pokemonsFiltrados.length === 0) {
    pokemonContainer.innerHTML = "<p> No encontramos Pokémon para este filtro</p>"; // Corregido: Ajuste menor en el texto del mensaje.
  }

  pokemonsFiltrados.forEach(pokemon => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("card");
    pokemonElement.innerHTML = `
      <h3>${pokemon.name}</h3>
      <p>Tipos: ${pokemon.type.join(", ")}</p> <!-- Corregido: Espacio después de la coma -->
      <img src="${pokemon.image}" alt="${pokemon.name}">
    `;
    pokemonContainer.appendChild(pokemonElement);
  });
}

export function filtrarPorTipo() {
  // Obtiene el valor seleccionado en el filtro
  const tipoSeleccionado = document.getElementById("type-filter")?.value;

  // Verifica que el valor y los datos existan
  if (!Array.isArray(pokemons)) {
    console.error("La lista de pokemons no está definida o no es un arreglo.");
    return;
  }

  // Filtra los pokemons por tipo o devuelve todos si no se selecciona un tipo
  const pokemonsFiltrados = tipoSeleccionado
    ? pokemons.filter(pokemon => pokemon.type?.includes(tipoSeleccionado))
    : pokemons;

  // Muestra la lista de pokemons filtrados
  mostrarPokemons(pokemonsFiltrados);
}


export function inicializarFiltro() {
  obtenerPokemons();
}
