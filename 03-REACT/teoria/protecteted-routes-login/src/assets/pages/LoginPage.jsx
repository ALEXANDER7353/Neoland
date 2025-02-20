import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


export function Login() {
    const [infoUser, setInfoUser] = useState()
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        login(infoUser)
        navigate('/protected')
    }

    return (
        <>
            <h1>Login</h1>
            <label>
                Email:
                <input type='email' onChange={(e) => setInfoUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </>
    )




}