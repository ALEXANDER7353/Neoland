
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import ProtectedRoutes from './ProtectedRoutes'


const Home = () => {
  return <div>Home</div>
}


function App() {  
  

 
  return (
    <Routes>
      <Route path='/' />
      <Route path='/login' element={<Login />} />
      <Route path='/protected' element={
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      } />
    </Routes >
  )
}

export default App