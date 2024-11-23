const API_BASE = "https://pokeapi.co/api/v2";

export async function pedirPokemons() {
  const response = await fetch(`${API_BASE}/pokemon`);

  const data = await response.json();

  return data.results;
}

export async function pedirMasInfoDelpkemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}




