//### **Ejercicio 3: Encontrar el primer número impar**

//**Descripción**: Dado un array de números, usa `find` para encontrar el primer número impar.


const numeros5 = [4, 8, 12, 13, 18, 21];
const primerImpar = numeros5.find((numero)=>numero % 2 !== 0);

console.log(primerImpar); // Debería mostrar 13


//**Pista**: Un número es impar si `numero % 2 !== 0`.

//**Explicación**:

//- `find` revisa cada número y verifica si es impar.
//- Devuelve el primer número que cumple `numero % 2 !== 0` y detiene la búsqueda.