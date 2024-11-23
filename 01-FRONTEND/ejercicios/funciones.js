
//  EJERCISIOS DE FUNCIONES 

// 1: Buscar el máximo

function sum(numberOne , numberTwo) {
    return ( numberOne+ numberTwo);
    

  }
  
let resultado = sum (10 , 20);
console.log(resultado);
 


// 2  Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']


let totales  = [];
    for(let palabra of avengers) {
      totales.push(palabra.length);
    }
    
    let maximo = Math.max.apply(null, totales);
    
    for (let elemento of avengers) {
      if (elemento.length === maximo) {
        console.log(elemento);
      }
    }
    
    
  
//3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

 let sum1 = numbers.reduce((anterior, actual) => anterior + actual,0);
console.log(sum1);


//4: Calcular el promedio

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function promedio (e){
  const sum = e.reduce((total,num) => total + num, 0);
  const pro = sum / e.length;
  return pro.toFixed (1);

}
console.log(promedio(numbers1));



//* Iteración #5: Calcular promedio de strings
/* Crea una función que reciba por parámetro un array 
y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. */

const mix = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumaMix(array) {
    const total = array.reduce((acc, actual) => {
        if (typeof actual == 'number') {
            return acc + actual; // si es number se suma el actual al acc
        } else if (typeof actual == 'string') {
            return acc + actual.length; // si es string se suma la longitud del actual al acc
        } else {
            return acc;
        }
    }, 0);
    return total; // 41,  es el total de la suma de los number y las longitudes de los string

    // EXTRA --> Calcular la media del total entre el número de elementos
    
}
console.log('SUMA MIX 🫱', sumaMix(mix));

  // 6: Valores únicos

  //crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
  //en caso que existan los elimina para retornar un array sin los elementos duplicados.

  const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ]; 
  let result = duplicates.filter((item,index)=>{
    return duplicates.indexOf(item) === index;
  })
  console.log(result);


  //7: Buscador de nombres
  // nome sale 

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(e, name) {
    for (let i = 0; i < e.length; i++){
      if (e[i] === name){
        return { inArray: true, position: i };
      }
    }
    return { inArray: false };
  }
 
   
  console.log(finderName(nameFinder, 'Uma')); 
  console.log(finderName(nameFinder, 'Marc')); 
  

  //8: Contador de repeticiones
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  const result1 = {};

  counterWords.forEach((value) => {
    result1[value] = (result1[value] || 0) + 1;
  });

  console.log(result1);
  
 
 
 
 


  
  
  
  
  
  
  
 

    
  
  