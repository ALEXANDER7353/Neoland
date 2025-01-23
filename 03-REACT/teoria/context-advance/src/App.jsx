import { useState, createContext, useContext } from 'react';
import './App.css';

// Creamos un contexto llamado ThemeContext
const ThemeContext = createContext();

// Definimos un hook personalizado llamado useTheme
function useTheme() {
  // Obtenemos el contexto usando useContext
  const context = useContext(ThemeContext);
  // Si el contexto no está definido, lanzamos un error
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  // Devolvemos el contexto
  return context;
}

// Definimos el componente principal App
function App() {
  // Creamos un estado llamado theme con el valor inicial "dark" y una función para actualizarlo llamada setTheme
  const [theme, setTheme] = useState("dark");

  // Definimos una función toggleTheme que alterna el valor de theme entre "dark" y "light"
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Retornamos el proveedor del contexto ThemeContext con el valor del tema y la función para alternarlo
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

// Definimos el componente Header
function Header() {
  // Usamos el hook personalizado useTheme para obtener el tema actual y la función para alternarlo
  const { theme, toggleTheme } = useTheme();
  // Retornamos un div que muestra el tema actual y un botón para cambiar el tema
  return (
    <div>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
}

// Exportamos el componente App como el componente principal
export default App;