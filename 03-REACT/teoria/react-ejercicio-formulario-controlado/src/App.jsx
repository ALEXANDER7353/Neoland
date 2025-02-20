import './App.css';
import { useRef,useState }  from 'react';

function FormularioControlado() {
  const [formData, setFormData] = useState({ name: '', edad: '',contraseña: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
   

    if (name === 'contraseña') {
      if (value.length < 8) {
        setErrors({
          ...errors,
          contraseña: 'La contraseña debe tener al menos 8 caracteres',
        });
      } else {
        setErrors({
          ...errors,
          contraseña: '',
        });
      }
    }
   

    

   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (  
  <>
  <from onSubmit={handleSubmit}>
    <lable>
      Nombre:
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

    </lable>
    <lable>
      Edad:
      <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
       
    </lable>
    <lable>
      Contraseña:
      <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />

    </lable>
    <button type="submit">Enviar</button>
  </from>
  </>
  );
  
  
}

export default FormularioControlado;
