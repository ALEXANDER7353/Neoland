function agregarParrafo() {
    
    const contenedor = document.getElementById('contenedor');
    
    const nuevoParrafo = document.createElement('p');
   
    nuevoParrafo.textContent = 'Nuevo párrafo';
   
    contenedor.appendChild(nuevoParrafo);
}
