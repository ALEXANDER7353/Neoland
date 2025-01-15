import PropTypes from 'prop-types'

export default function Saludar({nombre, apellido}) {
  return (
    <h1>Hola {nombre} {apellido}</h1>
  )
}

Saludar.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired
}