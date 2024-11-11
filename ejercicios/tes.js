// Definición de la clase Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método que muestra los detalles del vehículo
    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

// Creación de instancias de la clase Vehiculo
const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Honda", "Civic");

// Llamada al método detalles() para cada instancia
vehiculo1.detalles(); // Marca: Toyota, Modelo: Corolla
vehiculo2.detalles(); // Marca: Honda, Modelo: Civic
