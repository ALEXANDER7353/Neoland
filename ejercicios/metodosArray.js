// Ejercicio : 1 para `filter`**

//El método `filter` crea un nuevo array con todos los elementos que pasen una condición que nosotros le indiquemos.

//### **Ejercicio 1: Filtrar números pares**

//**Descripción**: Dado un array de números, usa `filter` para devolver solo los números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares); // Debería mostrar [2, 4, 6, 8, 10]

//**Pista**: La función que pasas a `filter` debe devolver `true` si el número es par (es decir, si `numero % 2 === 0`).

//**Explicación**:

//- `filter` recorrerá cada número en el array `numeros`.
//- Para cada número, evalúa si cumple la condición `(numero % 2 === 0)`.
//- Si el resultado es `true`, el número se incluye en el nuevo array.

// Ejercicio 2: Filtrar nombres largos**

//**Descripción**: Dado un array de nombres, usa `filter` para devolver solo los nombres que tienen más de 5 letras.

const nombres = ["Ana", "Miguel", "Cristina", "Luis", "María"];
const nombresLargos = nombres.filter((nombre) => nombre.length > 5);

console.log(nombresLargos); // Debería mostrar ["Miguel", "Cristina"]

//**Pista**: Piensa en una condición que determine si la longitud de un nombre es mayor que 5.

//**Explicación**:

//- `filter` recorre el array `nombres`.
//- La función que pasas a `filter` debería devolver `true` si `nombre.length > 5`.
//- Solo los nombres que cumplen esta condición se incluirán en el nuevo array `nombresLargos`.

//Ejercicio 3: Filtrar números mayores que la media**

//**Descripción**: Dado un array de números, primero calcula la media (promedio) de todos los números. Luego, usa `filter` para devolver solo los números mayores que la media.

const numeros1 = [5, 10, 15, 20, 25, 30];
let media = 0;

for (let index = 0; index < numeros1.length; index++) {
  media += numeros1[index] / numeros1.length;
}
console.log("la media es  ", media);

const mayoresQueMedia = numeros1.filter((numero) => numero > media);

console.log(mayoresQueMedia); // Debería mostrar [20, 25, 30]

//**Pista**:

//1. Calcula la media sumando todos los números y dividiéndolos entre la cantidad de elementos (`numeros.length`).
//2. Luego, utiliza esa media como el valor que necesitas comparar en `filter`.

//**Explicación**:

//- Primero, sumas todos los elementos y los divides por la cantidad para obtener la media.
//- En `filter`, la condición será que el número sea mayor que esa media.
//- El resultado será un array con los números que son mayores que la media calculada.

//## **Ejercicios para `map`**

//El método `map` crea un nuevo array aplicando una función a cada elemento del array original.

//### **Ejercicio 1: Doblar cada número**

//**Descripción**: Dado un array de números, usa `map` para devolver un nuevo array en el que cada número está multiplicado por 2.

const numeros2 = [1, 2, 3, 4, 5];
const dobles = numeros2.map((i) => i * 2);

console.log(dobles); // Debería mostrar [2, 4, 6, 8, 10]

//**Pista**: La función dentro de `map` debería devolver `numero * 2`.

//**Explicación**:

//- `map` recorre cada número en `numeros` y lo multiplica por 2.
//- El resultado es un nuevo array `dobles` en el que cada elemento del array original ha sido modificado según esa operación.

//### **Ejercicio 2: Convertir nombres a mayúsculas**

//**Descripción**: Dado un array de nombres en minúsculas, usa `map` para convertir todos los nombres a mayúsculas.

const nombres1 = ["ana", "miguel", "cristina", "luis", "maría"];
const nombresMayusculas = nombres1.map((nombre) => nombre.toUpperCase());

console.log(nombresMayusculas); // Debería mostrar ["ANA", "MIGUEL", "CRISTINA", "LUIS", "MARÍA"]

//**Pista**: Usa el método `toUpperCase()` para convertir un nombre a mayúsculas.

//**Explicación**:

//- `map` recorre cada nombre y aplica `nombre.toUpperCase()`.
//- El array resultante, `nombresMayusculas`, tiene los mismos elementos en posiciones idénticas, pero todos en mayúsculas.

//### **Ejercicio 3: Calcular la longitud de cada nombre**

//**Descripción**: Dado un array de nombres, usa `map` para devolver un nuevo array con la longitud de cada nombre.

const nombres3 = ["Ana", "Miguel", "Cristina", "Luis", "María"];
const longitudes = nombres3.map((nombre) => nombre.length);

console.log(longitudes); // Debería mostrar [3, 6, 8, 4, 5]

//**Pista**: Usa `nombre.length` para obtener la longitud de cada nombre.

//**Explicación**:
//- `map` recorre cada nombre y obtiene la longitud con `nombre.length`.
//- El resultado es un array `longitudes` donde cada posición corresponde a la longitud del nombre en la misma posición en el array original.

//## **Ejercicios para `find`**

//El método `find` devuelve el primer elemento del array que cumple una condición específica.

//### **Ejercicio 1: Encontrar el primer número mayor que 10**

//**Descripción**: Dado un array de números, usa `find` para encontrar el primer número que sea mayor que 10.

const numeros4 = [5, 8, 13, 7, 19, 3];
const primerMayorQueDiez = numeros4.find((numero) => numero > 10);

console.log(primerMayorQueDiez); // Debería mostrar 13

//**Pista**: La función dentro de `find` debería devolver `true` cuando el número es mayor que 10.

//**Explicación**:

//- `find` recorre el array hasta que encuentra un número que cumpla con `numero > 10`.
//- Devuelve el primer número que cumple esa condición y detiene la búsqueda.

//### **Ejercicio 2: Encontrar el primer nombre que empieza con 'C'**

//**Descripción**: Dado un array de nombres, usa `find` para encontrar el primer nombre que empieza con la letra 'C'.

const nombres4 = ["Ana", "Carlos", "Beatriz", "Cristina", "Luis"];
const primerNombreConC = nombres4.find((nombre) => nombre[0] == "C");

console.log(primerNombreConC); // Debería mostrar "Carlos"

//**Pista**: Usa `nombre[0]` para acceder a la primera letra de cada nombre y compárala con 'C'.

//**Explicación**:

//- `find` revisa cada nombre para ver si comienza con 'C'.
//- El primer nombre que cumpla la condición será devuelto por `find`.

//### **Ejercicio 3: Encontrar el primer número impar**

//**Descripción**: Dado un array de números, usa `find` para encontrar el primer número impar.

const numeros5 = [4, 8, 12, 13, 18, 21];
const primerImpar = numeros5.find((numero) => numero % 2 !== 0);

console.log(primerImpar); // Debería mostrar 13

//**Pista**: Un número es impar si `numero % 2 !== 0`.

//**Explicación**:

//- `find` revisa cada número y verifica si es impar.
//- Devuelve el primer número que cumple `numero % 2 !== 0` y detiene la búsqueda.
