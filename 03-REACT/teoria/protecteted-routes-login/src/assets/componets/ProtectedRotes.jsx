import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import PropTypes from 'prop-types'




function ProtectedRoutes({ children }) {
    const { user } = useAuth()
   
    if (!user) {
        return <Navigate to={'/login'} />
    }
    return children

}
ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoutes



  