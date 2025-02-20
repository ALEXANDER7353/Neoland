import { useForm } from 'react-hook-form'

import './App.css'

function App() {
 const { register, handleSubmit,  formState: { errors } } = useForm();
const onSubmit = (data) => {
  console.log(data)
}
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>
    nombre:
    <input {...register('nombre', {required: true})} />
    </label>
    {errors.nombre && <span>Este campo es requerido</span>}
    <br />

    <label>
    email:
    <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i })} />
    {errors.email && <span>Email invalido</span>}
    </label>
    {errors.email && <span>Este campo es requerido</span>}
    <br />
    
    <button type="submit">Enviar</button>
    </form>

    
    </>
  )
}

export default App
