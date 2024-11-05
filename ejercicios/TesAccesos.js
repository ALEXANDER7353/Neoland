// ### **Ejercicio 1: Acceder a un valor específico**
// #### Enunciado
// Queremos acceder al nombre del director de la película.

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


  function director (data) {
    let nombre  = data.movie.director
    console.log("🚀 ~ director ~ nombre:", nombre)
    
   
    
  }
director(starWarsInfo)
 


  //### **Ejercicio 2: Modificar un valor específico**

//#### Enunciado

//Queremos cambiar el nombre del planeta natal de Luke Skywalker a "Dagobah".

const starWarsInf1 = {
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
          allies: ["Emperor Palpatine"]
        }
      },
    },
  };

  function cambioPlaneta(data){
        let luka = data.movie.characters.main.homeworld = "Dagobah";
        console.log("🚀 ~ cambioPlaneta ~ luka:", luka);
     }
 console.log(cambioPlaneta(starWarsInf1));



 //Queremos agregar un nuevo aliado, "Chewbacca", al array de aliados de Luke Skywalker.
 
function aliado(data) {
  let nuevoAliado = data.movie.characters.main.allies;
  nuevoAliado.push("Chewbacca");
  console.log("🚀 ~ nuevoAliado:", nuevoAliado);

}
console.log(aliado(starWarsInf1));



//Queremos cambiar el nombre de "Darth Vader" a "Anakin Skywalker" en el JSON.

function nombre (data) {
  
  let cambioNombre = data.movie.characters.villain.name = "Anakin Skywalker";
 
  console.log("🚀 ~ nombre ~ cambioNombre:", cambioNombre);
 
 
}console.log(nombre(starWarsInf1));



//Queremos actualizar el año de estreno de la película de 1977 a 1978.

function Año (data) {
  
  let nuevoAño = data.movie.release_year = 1978;
  console.log("🚀 ~ Año ~ nuevoAño:", nuevoAño)
  
  
} console.log("🚀 ~ Año ~ Año:", Año(starWarsInf1))



 