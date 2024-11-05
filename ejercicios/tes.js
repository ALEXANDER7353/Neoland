const starWarsInfo = {
    movie: {
      title: "A New Hope",
      release_year: 1977,
      director: "George Lucas",
      characters: {
        main: {
          name: "Luke Skywalker",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
        },
        villain: {
          name: "Darth Vader",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Emperor Palpatine"],
        },
      },
    },
  };
  
  //### **Ejercicio 5: Cambiar la especie de Darth Vader a "Sith" si su nombre es "Anakin Skywalker"**

//#### Enunciado

//Queremos cambiar la especie de Darth Vader a "Sith", pero solo si su nombre es "Anakin Skywalker".

//1. **Leer y comprender el enunciado**

   //- Objetivo: Cambiar `species` de Darth Vader a "Sith" solo si su `name` es "Anakin Skywalker".
   //- Datos iniciales: JSON `starWarsInfo`, el nombre y la especie están en `movie.characters.villain`.

//2. **Dividir el problema en partes**

   //- Paso 1: Acceder a `movie.characters.villain`.
   //- Paso 2: Verificar si `name` es "Anakin Skywalker".
   //- Paso 3: Si se cumple la condición, cambiar `species` a "Sith".
function cambiEspecie (data) {
    let nuevaEspecie = data.movie.characters.villain;
   
    if (nuevaEspecie.species  === "Anakin Skywalker" ) {
        nuevaEspecie.species ="Sith" ;
      }
      
    }
    console.log(cambiEspecie(starWarsInfo));
    console.log(starWarsInfo.movie.characters.villain.species);
    
    
    
    






