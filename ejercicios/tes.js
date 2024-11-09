const starWarsDatabase = {
  movies: [
    {
      title: "A New Hope",
      release_year: 1977,
      characters: [
        { name: "Luke Skywalker", homeworld: "Tatooine", species: "Human" },
        { name: "Darth Vader", homeworld: "Tatooine", species: "Human" },
      ],
      starships: [
        { name: "X-wing", model: "T-65 X-wing" },
        { name: "TIE Advanced x1", model: "Twin Ion Engine" },
      ],
    },
    {
      title: "The Empire Strikes Back",
      release_year: 1980,
      characters: [
        { name: "Yoda", homeworld: "Dagobah", species: "Unknown" },
        { name: "Han Solo", homeworld: "Corellia", species: "Human" },
      ],
      starships: [
        { name: "Millennium Falcon", model: "YT-1300" },
        { name: "Slave I", model: "Firespray-31" },
      ],
    },
  ],
};

//### **Ejercicio 5: Crear un resumen de personajes por especie**

//#### Enunciado

//Queremos una función que recorra todas las películas y agrupe los personajes por especie en un objeto.

function personajePorEspecie(data) {
  const resumen = [];
  const personajes1 = data.movies;

  for (let a = 0; a < personajes1.length; a++) {
    const persona = personajes1[a];
    const info = persona.characters;

    for (let indexx = 0; indexx < info.length; indexx++) {
      const datosPersonaje = info[indexx];
      const datosfinal = `tipo de especie es : ${datosPersonaje.species}`;
      resumen.push(datosfinal);
    }
  }

  return resumen;
}

personajePorEspecie(starWarsDatabase);
