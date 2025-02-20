import{useCart} from './context/CartContext'
import  './App.css'


function App() {
  const { state, dispatch } = useCart()
const addItem = (item) => {
  dispatch({ type: 'add_item', payload: item })
}
const deleteItem = (item) => {
  dispatch({ type: 'delete_item', payload: item })
}

return (
  <>
    <h2>Productos</h2>
    <button onClick={() => addItem({ id: 1, name: 'Peras' })}> Añadir Peras</button>
    <button onClick={() => addItem({ id: 2, name: 'Naranjas' })}> Añadir Naranjas</button>
    <button onClick={() => deleteItem ({item.id})({item.'name'})}>Eliminar</button>
    <ul>
      {state.items.map(item => (
        <li key={item.id}>
          {item.name}
         
        </li>
      ))}
    </ul>
  </>
)
}

export default App