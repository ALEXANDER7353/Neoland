import { useReducer } from 'react'
import './App.css'


const initialState = { count: 0 }

const reducer = (state, action) => {

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }

    case 'reset':
      return { count: 0 }

    default:
      return { count: 0 }
  }


}



function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>

    </div>
  )
}

export default Counter
