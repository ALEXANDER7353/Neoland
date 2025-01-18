import Tarjeta from './Tarjeta';
import { tarjetas } from '../data/tarjetas';
function ListaTarjetas({titulo, descripcion, mensajeInicial}) {

    return (
        <div>
            {tarjetas.map((tarjeta) => (
                <Tarjeta  {...tarjeta} />
            ))}
        </div>
    )
}

export default ListaTarjetas;