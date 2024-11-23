const starWarsData = {
    characters: [
      { name: "Luke Skywalker", height: 172, mass: 77, species: "Human" },
      { name: "Darth Vader", height: 202, mass: 136, species: "Human" },
      { name: "Yoda", height: 66, mass: 17, species: "Unknown" },
    ],
  };   

  //#### Ejercicio 1: Información adicional

//Extiende la función `obtenerResumenPersonajes` para que también devuelva el peso (`mass`) de cada personaje
 //en el resumen.

function obtenerResumenPersonajes(data) {
    // Paso 1: Accedemos al array de personajes
    const personajes = data.characters;
  
    // Paso 2: Creamos un array vacío donde guardaremos el resumen
    const resumen = [];
  
    // Paso 3: Recorremos cada personaje
    for (let i = 0; i < personajes.length; i++) {
      const personaje = personajes[i];
      // Extraemos nombre y altura
      const info = `Nombre: ${personaje.name}, Altura: ${personaje.height}, Peso: ${personaje.mass} `;
      resumen.push(info); // Guardamos el resumen en el array
    }
  
    // Paso 4: Devolvemos el array resumen
    return resumen;
  }
  
  // Probamos la función
  console.log(obtenerResumenPersonajes(starWarsData));
  



  //#### Ejercicio 2: Filtrar personajes

//Crea una nueva función `filtrarPersonajesPorEspecie`, que reciba el JSON y una especie como argumento
// y devuelva solo los personajes de esa especie.

//- **Pista**: Usa un `if` dentro del bucle para verificar si `personaje.species` coincide con la especie dada.
//Si es así, añade la información al array de resultados.


function filtrarPersonajesPorEspecie(data, specie) {
  const nombreSpecies = [];

  const listaperosnajes = data.characters;

  for (let index = 0; index < listaperosnajes.length; index++) {
    const personaje = listaperosnajes[index];
    if (personaje.species === specie) {
      nombreSpecies.push(personaje);

      
    }
    
    }
    return nombreSpecies;
  }

filtrarPersonajesPorEspecie(starWarsData,"Human");






