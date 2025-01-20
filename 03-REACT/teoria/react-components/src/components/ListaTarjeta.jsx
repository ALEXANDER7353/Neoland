import Tarjeta from './Tarjeta';
import { tarjetas } from '../data/tarjetas';
function ListaTarjetas() {

    return (
        <div>
            {tarjetas.map((tarjeta) => (
                <Tarjeta key={tarjeta.titulo}  {...tarjeta} />
            ))}
        </div>
    )
}

export default ListaTarjetas;