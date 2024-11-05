//### Enunciado:

//Imagina que tienes dos variables, `firstName` y `lastName`, que contienen el nombre y apellido de una persona. Tu tarea es crear una función `formatName()` que haga lo siguiente:

//1. Concatenar `firstName` y `lastName` en un solo string llamado `fullName`, usando **template literals**.
//2. Convertir `fullName` a mayúsculas y guardarlo en una nueva variable `upperName`.
//3. Verificar si el string `upperName` contiene la palabra "SKYWALKER".
//4. Si `upperName` contiene "SKYWALKER", imprimir `"¡Es un Skywalker!"`.
//5. Si no contiene "SKYWALKER", imprimir `"No es un Skywalker"`.


let firstName = "Alexander";
let lastName = "calderon";

function formatName(firstName, lastName) {
  // Paso 1: Crear `fullName` usando template literals
  let fullName = `${firstName} ${lastName}`;

  // Paso 2: Convertir `fullName` a mayúsculas y guardarlo en `upperName`
  let upperName = fullName.toUpperCase();

  // Paso 3: Verificar si `upperName` contiene "SKYWALKER"
  if (upperName.includes("SKYWALKER")) {
    console.log("¡Es un Skywalker!");
  } else {
    console.log("No es un Skywalker");
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
  console.log(cleanMessage);

  cleanedMessage = cleanedMessage.replace("force", "Force");
  console.log(cleanMessage);

  cleanMessage.map((word) => word[0].toUpperCase() + word.slice(1)).join("");
 
}



//Tienes una lista de nombres de personajes en formato CSV, guardada en la variable `charactersCSV`. Tu tarea es crear una función `processCharacters()` que:

//1. Divida el string `charactersCSV` en un array de nombres, usando `.split(",")`.
//2. Verifique si el array contiene el nombre "Yoda".
//3. Si el nombre "Yoda" está en la lista, reemplázalo con "Master Yoda" en el array.
//4. Vuelva a unir el array en un string separado por guiones ("-") usando `.join("-")`.
//5. Imprima el resultado final.

function processCharacters(data){
  let newarray = charactersCSV.split(",");
  console.log("🚀 ~ processCharacters ~ newarray:", newarray)

  let nemayoda = newarray.includes("Yoda");
  console.log("🚀 ~ processCharacters ~ nemayoda:", nemayoda)
  if (nameyoda !== -1) {
    processCharacters[nameyoda]= "Master Yoda";
}
let unirarray= processCharacters.join("-");
console.log("🚀 ~ processCharacters ~ unirarray:", unirarray)

  
}





