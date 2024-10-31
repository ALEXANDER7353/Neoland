//### Enunciado:

//Imagina que tienes dos variables, `firstName` y `lastName`, que contienen el nombre y apellido de una persona. Tu tarea es crear una función `formatName()` que haga lo siguiente:

//1. Concatenar `firstName` y `lastName` en un solo string llamado `fullName`, usando **template literals**.
//2. Convertir `fullName` a mayúsculas y guardarlo en una nueva variable `upperName`.
//3. Verificar si el string `upperName` contiene la palabra "SKYWALKER".
//4. Si `upperName` contiene "SKYWALKER", imprimir `"¡Es un Skywalker!"`.
//5. Si no contiene "SKYWALKER", imprimir `"No es un Skywalker"`.

let firstName = "Alexander";
let lastName = "calderon";

function formatName() {
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    let upperName = fullName.toUpperCase()
    console.log(upperName);

if (upperName.includes ("Skywalker")) { 
    console.log("si es un Skywalker");
    
    
} else { console.log("no es un Skywalker");

    
}



    
 }



 //Tienes un string `welcomeMessage` que contiene una frase de bienvenida con espacios al principio y al final. También contiene la palabra "Force" en minúsculas y deseas estandarizarla. Crea una función `cleanMessage()` que haga lo siguiente:

//1. Eliminar los espacios al principio y al final del string usando `.trim()`.
//2. Reemplazar todas las apariciones de la palabra "Force" por "Force" en mayúscula (usando `.replaceAll()`).
//3. Convertir la primera letra de cada palabra a mayúscula y el resto a minúsculas.
//4. Imprimir el mensaje limpio y formateado.


let welcomeMessage = "  este es el grupo de force  ";

function cleanMessage(welcomeMessage) {
    
   let cleanedMessage = welcomeMessage.trim();
    
   cleanedMessage = cleanedMessage.replace("force", "Force");

cleanMessage.map( (word) => word [0].toUpperCase () + word.slice(1)).join("");
console.log(cleanMessage);


  
}

