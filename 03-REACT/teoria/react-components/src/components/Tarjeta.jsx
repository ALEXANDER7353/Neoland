import PropTypes from 'prop-types';
import { useState } from 'react';

function Tarjeta({titulo, descripcion, mensajeInicial}) {
    // necesitamos props para definir los datos de la tarjeta: DONE
    // necesitamos un boton para mostrar un mensaje: DONE
    // necesitaremos un estado para mostrar el mensaje: DONE
    const [mensaje, setMensaje] = useState(mensajeInicial);
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            <button onClick={() => alert(mensaje)}>Mostrar mensaje</button>
        </div>
    )
}

export default Tarjeta;

Tarjeta.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    mensajeInicial: PropTypes.string.isRequired
}