// Importamos useContext y createContext desde React
import { useContext, createContext } from 'react';
// Importamos el archivo de estilos CSS
import './App.css';

// Creamos un contexto llamado ThemeContext
const ThemeContext = createContext();
// Creamos un contexto llamado LanguageContext
const LanguageContext = createContext();

function App() {
  // Definimos una constante theme con el valor "light"
  const theme = "light";
  // Definimos una constante language con el valor "en"
  const language = "en";

  // Retornamos el proveedor del contexto ThemeContext con el valor del tema
  // y el proveedor del contexto LanguageContext con el valor del idioma
  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <Header />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

function Header() {
  // Usamos el hook useContext para obtener el valor del contexto ThemeContext
  const theme = useContext(ThemeContext);
  // Usamos el hook useContext para obtener el valor del contexto LanguageContext
  const language = useContext(LanguageContext);
  return (
    <div>
      <p>Tema: {theme}</p>
      <p>Idioma: {language}</p>
    </div>
  );
}

export default App
