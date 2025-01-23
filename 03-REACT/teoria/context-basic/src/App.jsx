

function App() {
  const theme = 'dark'
  return (
    
    <>
     <h1>hello word </h1>
    <Header theme ={theme}/>
    
    
    </>
     
  )
  
}


function Header({theme}) {
  return (
    <header>
      <h1> hello Header</h1>
      <Navbar  theme={theme}/>
    </header>
  )
}

function Navbar({theme}) {
  return (
    <nav>
      <h1>Navbar</h1>
      <Button theme={theme}/>

    </nav>
  )
}

function Button({theme }) {

  return (
    <button>{theme=== 'dark '? 'MODO OSCURO': 'MODONORMAL '}</button>
  )
}

export default App
