//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme');
console.log(boton);

 

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let h =document.querySelector("h1")
console.log(h);

//1.3 Usa querySelector para mostrar por consola todos los p

// Selecciona todos los elementos <p> en el documento y los almacena en la variable 'parrafos'
const parrafos = document.querySelectorAll('p');

// Recorre cada elemento en 'parrafos' usando forEach y lo muestra en la consola
parrafos.forEach(parrafo => console.log(parrafo));


// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

document.querySelectorAll('.pokemon').forEach(element => console.log(element));

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

document.querySelectorAll('[data-function="testMe"]').forEach(Element => console.log(Element));


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);
