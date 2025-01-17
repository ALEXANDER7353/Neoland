
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Profile from './components/profile'
import User from './components/user'
import Home from './components/home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App
