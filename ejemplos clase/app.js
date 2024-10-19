


  //Ejercicio 2: Sumar elementos de cada fila en una matriz
  //Tienes una matriz que representa las calificaciones de varios estudiantes en diferentes asignaturas. 
  //Debes calcular la suma de las calificaciones para cada estudiante y almacenarlas en un nuevo array. 

// Matriz de calificaciones
let calificaciones = [
    [70, 80, 90],
    [88, 76, 95],
    [60, 85, 82]
];

// Array para almacenar la suma de calificaciones por estudiante
let sumaPorEstudiante = [];

// Bucle para recorrer cada fila (cada estudiante)
for (let i = 0; i < calificaciones.length; i++) {
    // Variable para almacenar la suma de la fila actual
    let suma = 0;

    // Bucle para recorrer cada calificación en la fila actual
    for (let j = 0; j < calificaciones[i].length; j++) {
        // Sumar la calificación actual a la variable 'suma'
        suma += calificaciones[i][j];
    }

    // Añadir la suma total de la fila al array 'sumaPorEstudiante'
    sumaPorEstudiante.push(suma);
}

// Imprimir la suma de calificaciones de cada estudiante
console.log("Sumas por estudiante:", sumaPorEstudiante);


    









// Desarrollador una calculadora super simple
function multiplicar(num1, num2) {
    return num1 * num2
}
// Añadir metodos de operaciones a el objeto calculadora
const calculadora = {
 sumar1: (num1, num2)
 
 

}










const inventario = [
    { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
    { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
    { nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50 },
    { nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10 }
  ];
// Función 1: Añadir un Producto



function añadieproductos(nombre , categoria , cantidad , precio ) {
    const newProduct = {nombre, categoria, cantidad, precio}
    inventario.push(newProduct)
    // inventario.push({nombre, categoria, cantidad, precio})
    console.log(`Se ha añadido el producto ${nombre}`)
}
    
    
// Función 2: Buscar un Producto

function buscarProducto(label, value) {
    const resultados = inventario.filter((producto)=> producto[label.toLowerCase()].toLowerCase() === value.toLowerCase())
    return resultados
}

console.log(buscarProducto('nomBre', 'cAmisa'))


// Función 3: Actualizar Stock

function actualizrstock(array) {
    

   
    
}










