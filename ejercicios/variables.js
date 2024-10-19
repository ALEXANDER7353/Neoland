/// EJERCISIOS  Variables

let myFavoriteHero = "hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

/// EJERCISIOS  Operadores

///1.1
console.log(10 * 5);
///1.2
console.log(10 / 2);
///1.3
console.log(15 % 9);

///1.4
let p = 10;
let j = 5;
let o = 15;
 console.log(p + j);
 ///1.5
 let c = 10;
 let m = 5;
 let i = 50;
 console.log(c * m);
 
 
/// EJERCISIOS  Variables avanzadas

///1.1 
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
 console.log(character);

 ///1.2
 let firstName = 'Jon'; lastName = 'Snow'; age = 24;

 let nombreCompletoEspacios = `Soy ${firstName} ${lastName} tengo  ${age}  años y me gustan los lobos`;

console.log(nombreCompletoEspacios);







///1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);


///1.4

let globalBasePrice = 10000; globalBasePrice = 25000

console.log(globalBasePrice);

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

console.log(globalBasePrice + car1.finalPrice);
console.log(globalBasePrice + car1.basePrice);
console.log(globalBasePrice + car1.basePrice + car1.finalPrice);

console.log(globalBasePrice + car2.finalPrice);
console.log(globalBasePrice + car2.basePrice);
console.log(globalBasePrice + car2.basePrice + car2.finalPrice);


///  EJERCISIOS Arrays
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log( avengers[0]);

///1.2
console.log(avengers.shift());
console.log(avengers);

console.log(avengers.unshift('IRONMAN'));
console.log(avengers);

let nuevoavenger = avengers.splice(1, 1, 'IROMAN')
console.log(nuevoavenger);

////1.3
console.log(avengers.length);

///1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

console.log(rickAndMortyCharacters.unshift("Morty" , "Summer"));
console.log(rickAndMortyCharacters);

let ultimorickAndMortyCharacters = rickAndMortyCharacters.pop();
console.log(ultimorickAndMortyCharacters); 

///1.5

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

console.log(rickAndMortyCharacters1.pop());
console.log(rickAndMortyCharacters1);

let ultimorickAndMortyCharacters1 = rickAndMortyCharacters1.pop();
console.log(ultimorickAndMortyCharacters1); 

let primeraririckAndMortyCharacters1 = rickAndMortyCharacters1 .slice(0,1);
console.log(primeraririckAndMortyCharacters1);

///1.6


let menoselemtosrickAndMortyCharacters1 = rickAndMortyCharacters1.splice(1, 1,)


console.log(menoselemtosrickAndMortyCharacters1);

console.log(rickAndMortyCharacters1);


/// EJERCISIO 5 Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

/// 1.1 console.log("number2 dividido entre number1 es igual a 2");

let = (number2 / number1== 2 );

console.log(number2 / number1 == 2 ); ////  2 

/// 1.2  console.log("number1 es estrictamente distinto a number2");

letr = (number1 !== number2)

console.log(number1 !== number2);

/// 1.3  console.log("number3 es distinto number1");

let = (number3 !== number1);

console.log(number3 !== number1); 



///  1.4 console.log("number3 por 5 es igual a number1");

let = (number3 * 5 == number1);
console.log(number3 * 5 == number1 ); 


/// 1.5 console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");

let = ((number3 * 5) == (number1 * 2) == number2 );
console.log((number3 * 5) == (number1 * 2) == number2 );

/// 1.6   console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");

let = (number2 / 2 ) || (number1 / 5);
console.log(number2 / 2 ) || (number1 / 5);

/// EJERCISIO 6: Bucles

///1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i< 10; i++) {
    console.log(i);
    
  
}
  

///1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
///cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i< 10; i++) {
    if (i % 2 === 0 ) {
        console.log(i );
        
        
    }
}

  /// 1.3 crea un bucle para conseguir dormir contando ovejas. 
///Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
///Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
///y cambia el mensaje en la décima vuelta a 'Dormido!'.


let listaNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

for (let elemento = 1; elemento < listaNumeros.length; elemento++) {
    if (listaNumeros[elemento] === 11) {
        console.log(elemento,  'Dormido!');
    } else {
        console.log(elemento, 'Intentando dormir 🐑');

    }
}


    
   
    
 


    
  




        
        

    


    
  