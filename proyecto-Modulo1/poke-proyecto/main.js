renderLogin();

import { pedirPokemons, pedirMasInfoDelpkemon } from "./utils/api";
import { crearPokemonInfoCards } from "./componenetes/card";
import { buscarPokemon } from "./utils/buscador";
import {
  obtenerPokemons,
  filtrarPorTipo,
  inicializarFiltro,
} from "./utils/filtro";

document.addEventListener("DOMContentLoaded", () => {
  inicializarFiltro();

  const typeFilter = document.getElementById("type-filter");
  if (typeFilter) {
    typeFilter.addEventListener("change", filtrarPorTipo);
  } else {
    console.error("El selector de tipos no se encontró en el DOM.");
  }
});

const pokemonContainer = document.getElementById("pokemon-container");

async function cargarpokemons() {
  const pokemons = await pedirPokemons();

  
  const pikachu = {
    name: "pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/25/",
  };
  pokemons.unshift(pikachu); 

  const pokemonsConMasInfo = await Promise.all(
    pokemons.map((pokemon) => {
      return pedirMasInfoDelpkemon(pokemon.url);
    })
  );

  pokemonsConMasInfo.forEach((pokemon) => {
    const card = crearPokemonInfoCards(pokemon);

    // Agregar un evento de clic a la tarjeta
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

    pokemonContainer.appendChild(card);
  });
}

export function renderLogin() {
  const isLogin = localStorage.getItem("loggedIn");
  if (isLogin !== "true") {
    window.location.href = "./componenetes/login/login.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#search");
  let resultadoDiv = document.querySelector("#resultado");

  if (!resultadoDiv) {
    resultadoDiv = document.createElement("div");
    resultadoDiv.id = "resultado";
    document.body.appendChild(resultadoDiv);
  }

  input.addEventListener("input", async (event) => {
    const query = event.target.value;

    if (query.trim() === "") {
      resultadoDiv.innerHTML = "";
      return;
    }
    const pokemon = await buscarPokemon(query);
    if (pokemon) {
      resultadoDiv.innerHTML = `
    <h3>${pokemon.name.toUpperCase()}</h3>
    <img src ="${pokemon.sprites.front_default}" alt = "${pokemon.name}">
    <p>Tipos(s):${pokemon.types.map((type) => type.type.name).join(",")}</p>`;
    } else {
      resultadoDiv.innerHTML = `<p>No se encontro ese Pokemon </p>`;
    }
  });
});

cargarpokemons();
