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
          allies: ["Emperor Palpatine"],
        },
      },
    },
  };

  function cambioPlaneta(data){
    return data.movie.main;
    
   
    


    
     

     
    
  }
 console.log(cambioPlaneta(starWarsInf1));
 