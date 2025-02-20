import './App.css'
import { useRef, useState } from 'react'

function FormularioNoControlado() {
  const inputRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('El valor ingresado es: ' + inputRef.current.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" ref={inputRef} />
        </label>
        <button type='submit' >Enviar</button>
      </form>
    </>
  )
}


function FormularioControlado() {

  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    console.log("🚀 ~ handleSubmit ~ formData:", formData)
    if (!formData.email) return alert('Falta el email')
    event.preventDefault()
  }

  // const handleChangeName = (event) => {
  //   const { value } = event.target
  //   setFormData((prevState) => ({ name: value, email: prevState.email }))
  // }


  // const handleChangeEmail = (event) => {
  //   const { value } = event.target
  //   setFormData((prevState) => ({ name: prevState.name, email: value }))
  // }


  return <>

    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type='email' name='email' value={formData.email} onChange={handleChange} />
      </label>

      <button type='submit' >Enviar</button>

    </form>
  </>

}

export default FormularioControlado
