import { createContext, useContext, useReducer } from "react";


const CartContext = createContext()

const initialState = { items: [{ id: 33, name: 'manzanas' }], totalPrice: 0 }



const reducer = (state, action) => {

    switch (action.type) {
        case 'add_item':
            // state.items.push(action.payload) // añade un item nuevo mofificando el state.item original
            return { ...state, items: [...state.items, action.payload] } // crea un objeto/state nuevo, mantieniendo al informacion anterior y añadiendo a este objeto la nueva información
        case 'delete_item':
            return { ...state, items: state.items.filter((item) => item.id !== action.payload.id) }

        default:
            return { items: [], totalPrice: 0 }
    }

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>

}


export const useCart = () => useContext(CartContext)