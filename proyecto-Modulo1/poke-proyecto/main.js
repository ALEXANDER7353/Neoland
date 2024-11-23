import { pedirPokemons, pedirMasInfoDelpkemon } from "./utils/api";
import { crearPokemonInfoCards } from "./componentes/card";
import { buscarPokemon } from "./utils/buscador";
import {
  obtenerPokemons,
  filtrarPorTipo,
  inicializarFiltro,
} from "./utils/filtro";

// Función para redirigir al login si no está autenticado
function renderLogin() {
  const isLogin = localStorage.getItem("loggedIn");
  if (isLogin !== "true") {
    window.location.href = "./componentes/login/login.html";
  }
}

// Función para cargar los Pokémon y mostrar las tarjetas
async function cargarPokemons() {
  try {
    let pokemons = await pedirPokemons();
    const pikachu = { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" };
    pokemons.unshift(pikachu); // Añadir Pikachu al principio

    const pokemonsConMasInfo = await Promise.all(
      pokemons.map((pokemon) => pedirMasInfoDelpkemon(pokemon.url))
    );

    pokemonsConMasInfo.forEach((pokemon) => {
      const card = crearPokemonInfoCards(pokemon);

      // Agregar evento de clic para realizar búsqueda con el nombre del Pokémon
      card.addEventListener("click", () => {
        const input = document.querySelector("#search");
        const resultadoDiv = document.querySelector("#resultado");

        if (input) {
          input.value = pokemon.name;
          input.dispatchEvent(new Event("input"));
        }

        if (resultadoDiv) {
          resultadoDiv.scrollIntoView({ behavior: "smooth" });
        }
      });

      document.getElementById("pokemon-container").appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar los Pokémon:", error);
  }
}

// Función para manejar el evento de búsqueda de Pokémon
function manejarBusqueda() {
  const input = document.querySelector("#search");
  let resultadoDiv = document.querySelector("#resultado");

  if (!resultadoDiv) {
    resultadoDiv = document.createElement("div");
    resultadoDiv.id = "resultado";
    document.body.appendChild(resultadoDiv);
  }

  input.addEventListener("input", async (event) => {
    const query = event.target.value.trim();

    if (query === "") {
      resultadoDiv.innerHTML = "";
      return;
    }

    const pokemon = await buscarPokemon(query);
    if (pokemon) {
      resultadoDiv.innerHTML = `
        <h3>${pokemon.name.toUpperCase()}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Tipos(s): ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
      `;
    } else {
      resultadoDiv.innerHTML = "<p>No se encontró ese Pokémon.</p>";
    }
  });
}

// Función para inicializar filtros de tipo
function inicializarFiltros() {
  const typeFilter = document.getElementById("type-filter");
  if (typeFilter) {
    typeFilter.addEventListener("change", filtrarPorTipo);
  } else {
    console.error("El selector de tipos no se encontró en el DOM.");
  }
}

// Esperar que el contenido se cargue antes de ejecutar funciones principales
document.addEventListener("DOMContentLoaded", () => {
  renderLogin(); // Verificar si el usuario está logueado
  inicializarFiltro(); // Inicializar los filtros
  manejarBusqueda(); // Manejar la búsqueda de Pokémon
  inicializarFiltros(); // Inicializar los filtros de tipo
  cargarPokemons(); // Cargar los Pokémon
});
