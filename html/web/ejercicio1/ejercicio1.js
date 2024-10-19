function agregarParrafo() {
    
    var contenedor = document.getElementById('contenedor');
    
    var nuevoParrafo = document.createElement('p');
   
    nuevoParrafo.textContent = 'Nuevo párrafo';
   
    contenedor.appendChild(nuevoParrafo);
}
