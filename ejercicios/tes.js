
//## **Ejercicios para `filter`**

//### **Ejercicio 1: Crear una función personalizada `miFilter`**

//**Descripción**: Crea una función llamada `miFilter` que reciba un array y un callback que actúe como condición. Devuelve un nuevo array con los elementos que cumplen la condición especificada en el callback.

const numeros1 = [1, 2, 3, 4, 5];

function miFilter(array, callback) {
 const resultadoCondicion= [];

 for (let i = 0; i < array.length; i++) {
  const condicionCallback = callback(array[i],i,array);
  
  if (callback(array[i],i,array)){
    resultadoCondicion.push(array[i]);

  }
}

return resultadoCondicion

}
const pares = miFilter(numeros1, (numero) => numero % 2 === 0);
console.log("🚀 ~ pares:", pares)


//**Pista**: Crea un array vacío. Recorre el array original y usa `push` para agregar solo los elementos para los cuales el callback devuelve `true`.
