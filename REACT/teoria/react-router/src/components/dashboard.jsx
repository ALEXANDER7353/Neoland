import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard;