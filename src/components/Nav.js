import { Link, Outlet } from 'react-router-dom';
// imported css file for Nav component
import './Nav.css';

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-main ">
            <div className="container-fluid text-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* List of tabs */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 row">
                        {/* active tab */}
                        <li className="nav-item col">
                            <Link className="nav-link active link" to='/group_chat'>Group Chat</Link> 
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/manage_users">Manage Users</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/manage_documents">Manage Documents</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* rendering the navbar with configured routing when this cmponent is rendered */}
        <div className='container mt-2'>
            <Outlet />
        </div>
    </>);
}

export default Nav;