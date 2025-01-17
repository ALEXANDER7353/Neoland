import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    console.log("🚀 ~ Home ~ navigate:", navigate)
    return (
        <div>
            <button onClick={() => navigate('/user/1')}>Go to User 1</button>
        </div>
    )
}

export default Home;