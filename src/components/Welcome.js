import { Link } from 'react-router-dom';

function Welcome() {
    return <>
        <div className="container row-6 text-center">
            <br></br><br></br>
            <h1>Welcome to Users Module</h1>
            <br></br>
            <h4>Existing User</h4>
            <br></br>
            {/* routing to login page using Link tag */}
            <button className="btn btn-primary">
                <Link className="nav-link" to="/login">Login</Link>
            </button>
            <br></br><br></br>
            <h4>New User</h4>
            <br></br>
            {/* routing to registration page using Link tag */}
            <button className="btn btn-primary">
                <Link className="nav-link" to="/register">Register</Link>
            </button>
        </div>
    </>
}

export default Welcome;