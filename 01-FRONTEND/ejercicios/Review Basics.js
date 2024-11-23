                              //JS Review Basics

    //1: Mix for e includes

    //Dado el siguiente javascript usa forof para recorrer el array de películas,
     //genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
      //Ten en cuenta que las categorías no deberían repetirse. 
      //Para filtrar las categorías puedes ayudarte de la función .includes()

      const movies = [
        {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
        {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
        {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
        {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
    ]      

     const nuevascategorias= []


    for (const movie of movies) {

      for (const category of movie.categories ) {
      
        if (!nuevascategorias.includes(category)){
          nuevascategorias.push(category)
        }

        
      }
      console.log(nuevascategorias);
      



        
 }



//**Iteración #2: Mix Fors**

//Dado el siguiente javascript usa forof y forin para hacer la media del volumen
// de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]



// Variables para almacenar el volumen total y la cantidad de sonidos
let totalVolume = 0;
let soundCount = 0;

// Iteramos sobre cada usuario en el array 'users'
for (const user of users) {
  // Iteramos sobre cada sonido favorito del usuario
  for (const sound in user.favoritesSounds) {
      // Sumamos el volumen del sonido actual al total
      totalVolume += user.favoritesSounds[sound].volume;
      // Incrementamos el contador de sonidos
      soundCount++;
  }
}

// Calculamos la media dividiendo el volumen total entre la cantidad de sonidos
const averageVolume = totalVolume / soundCount;

// Mostramos la media del volumen en la consola
console.log(`La media del volumen de los sonidos favoritos es: ${averageVolume}`);



//

      
        
         
     
        
        


    
   
  

  
  

    
