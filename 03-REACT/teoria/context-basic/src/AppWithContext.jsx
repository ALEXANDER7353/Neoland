import { useContext, createContext } from "react";

const ThemeContext = createContext()

function App() {
    const theme = 'dark'

    return (
        <>
        <ThemeContext.Provider value={theme}>
            <Header/>
        </ThemeContext.Provider>
        </>
    )
}


function Header() {

    return <Navbar/>
    
}

function Navbar() {

    return <Button/>
    
}

function Button() {

    const theme = useContext(ThemeContext)
    return <button> {theme === 'dark'? 'MODO OSCURO': 'MODO NORMAL'}</button> 
}
