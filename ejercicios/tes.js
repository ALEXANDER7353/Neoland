const usuariosData = {
  usuarios: [
    { nombre: "Ana Pérez", edad: "25", ciudad: "Madrid" },
    { nombre: "Carlos García", edad: "32", ciudad: "Barcelona" },
    { nombre: "Luisa Fernández", edad: "28", ciudad: "Sevilla" },
    { nombre: "José López", edad: "45", ciudad: "Valencia" },
    { nombre: "Marta Sánchez", edad: "31", ciudad: "Bilbao" },
  ],
};

//Ejercicio 1: Iniciales de nombres completos

//Objetivo: Obtener las iniciales de cada nombre completo.
//Proceso: La función auxiliar obtenerIniciales divide el nombre completo en palabras
// y toma la primera letra de cada palabra.
//La función principal obtenerInicialesLista aplica esta función a cada nombre
// en la lista.
function obtenerIniciales(usuario) {
  const iniciales = usuario.nombre
    .split(" ")
    .map((palabra) => palabra[0])
    .join("");

  return `nombre:${usuario.nombre} inicial:${iniciales}`;
}

function obtenerInicialesLista(data) {
  const nombresDePersonas = data.usuarios;

  const primeraLetra = nombresDePersonas.map((usuario) =>
    obtenerIniciales(usuario)
  

  );
  console.log("🚀 ~ obtenerInicialesLista ~ primeraLetra:", primeraLetra)
}

obtenerInicialesLista(usuariosData);
