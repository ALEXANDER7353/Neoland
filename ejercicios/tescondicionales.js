//### Ejemplo de JSON Complejo (Datos de Star Wars)


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
  



//### **Ejercicio 1: Modificar el planeta natal si el personaje es "Luke Skywalker"**

//#### Enunciado

//Queremos cambiar el planeta natal de "Luke Skywalker" a "Dagobah", pero solo si su `homeworld` actual es "Tatooine".

//1. **Leer y comprender el enunciado**

   //- Objetivo: Cambiar el `homeworld` de Luke solo si actualmente es "Tatooine".
   //- Datos iniciales: JSON `starWarsInfo`, la información está en `movie.characters.main.homeworld`.

//2. **Dividir el problema en partes**

   //- Paso 1: Acceder a `movie.characters.main`.
   //- Paso 2: Usar un condicional para verificar si `homeworld` es "Tatooine".
   //- Paso 3: Si se cumple la condición, cambiar `homeworld` a "Dagobah".

//3. **Código**

function cambiarPlanetaSiEsLuke(data) {
    const luke = data.movie.characters.main;
  
    if (luke.name === "Luke Skywalker" && luke.homeworld === "Tatooine") {
      luke.homeworld = "Dagobah";
    }
  }
  
  // Probamos la función
  cambiarPlanetaSiEsLuke(starWarsInfo);
  console.log(starWarsInfo.movie.characters.main.homeworld); // Debería imprimir "Dagobah" si era "Tatooine"
  


//### **Ejercicio 2: Agregar un aliado si el personaje es "Darth Vader"**

//#### Enunciado

//Queremos agregar "Grand Moff Tarkin" como aliado de "Darth Vader", pero solo si no está ya en su lista de aliados.

//1. **Leer y comprender el enunciado**

   //- Objetivo: Añadir "Grand Moff Tarkin" a `allies` de Darth Vader si no existe ya en el array.
   //- Datos iniciales: JSON `starWarsInfo`, el array `allies` está en `movie.characters.villain.allies`.

//2. **Dividir el problema en partes**

   //- Paso 1: Acceder a `movie.characters.villain`.
   //- Paso 2: Verificar si "Grand Moff Tarkin" ya está en el array `allies`.
   //- Paso 3: Si no está, añadirlo al array.

//3. **Código**

function agregarAliadoSiEsDarthVader(data) {
    const darthVader = data.movie.characters.villain;
  
    if (
      darthVader.name === "Darth Vader" &&
      !darthVader.allies.includes("Grand Moff Tarkin")
    ) {
      darthVader.allies.push("Grand Moff Tarkin");
    }
  }
  
  // Probamos la función
  agregarAliadoSiEsDarthVader(starWarsInfo);
  console.log(starWarsInfo.movie.characters.villain.allies); // Debería incluir "Grand Moff Tarkin" si no estaba antes
  

//### **Ejercicio 3: Actualizar el nombre del director si el año de estreno es anterior a 1980**

//#### Enunciado

//Queremos cambiar el nombre del director a "Irvin Kershner" solo si el año de estreno de la película es anterior a 1980.

//1. **Leer y comprender el enunciado**

   //- Objetivo: Cambiar el nombre del director a "Irvin Kershner" si `release_year` es menor que 1980.
   //- Datos iniciales: JSON `starWarsInfo`, el año está en `movie.release_year`.

//2. **Dividir el problema en partes**

   //- Paso 1: Acceder a `movie.release_year`.
   //- Paso 2: Verificar si `release_year` es menor que 1980.
   //- Paso 3: Si se cumple la condición, cambiar `director` a "Irvin Kershner".

//3. **Código**

function cambiarDirectorSiAnteriorA1980(data) {
    const movie = data.movie;
  
    if (movie.release_year < 1980) {
      movie.director = "Irvin Kershner";
    }
  }
  
  // Probamos la función
  cambiarDirectorSiAnteriorA1980(starWarsInfo);
  console.log(starWarsInfo.movie.director); // Debería imprimir "Irvin Kershner" si el año era anterior a 1980
    



//### **Ejercicio 4: Eliminar un aliado de Luke Skywalker si el nombre es "Obi-Wan Kenobi"**

//#### Enunciado

//Queremos eliminar a "Obi-Wan Kenobi" de la lista de aliados de Luke Skywalker, pero solo si ya está en la lista.

//1. **Leer y comprender el enunciado**

   //- Objetivo: Eliminar "Obi-Wan Kenobi" de `allies` de Luke solo si está en el array.
   //- Datos iniciales: JSON `starWarsInfo`, el array `allies` de Luke está en `movie.characters.main.allies`.

//2. **Dividir el problema en partes**

   //- Paso 1: Acceder al array `allies` de Luke.
   //- Paso 2: Verificar si "Obi-Wan Kenobi" está en el array.
   //- Paso 3: Si está, encontrar su índice y eliminarlo.

//3. **Código**

function eliminarAliadoSiEsObiWan(data) {
    const luke = data.movie.characters.main;
    const index = luke.allies.indexOf("Obi-Wan Kenobi");
  
    if (index > -1) {
      luke.allies.splice(index, 1);
    }
  }
  
  // Probamos la función
  eliminarAliadoSiEsObiWan(starWarsInfo);
  console.log(starWarsInfo.movie.characters.main.allies); // No debería incluir "Obi-Wan Kenobi" si estaba antes
  



 







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
    console.log("🚀 ~ cambiEspecie ~ nuevaEspecie:", nuevaEspecie)
    
    
}