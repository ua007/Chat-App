// import ChatList from './ChatList.js';
// import DocumentList from './DocumentList.js';
// import UserList from './UserList.js';
// import EditUser from './EditUser.js';
// import Logout from './Logout.js';
import { Link } from 'react-router-dom';

function Welcome() {
    return <>
        {/* <h2>Welcome</h2>
        <div>
            <ChatList />
            <UserList />
            <EditUser />
            <DocumentList />
            <Logout />
        </div> */}
        <div className="container row-6 text-center">
            <br></br><br></br>
            <h1>Welcome to Users Module</h1>
            <br></br>
            <h4>Existing User</h4>
            <br></br>
            <button className="btn btn-primary">
                <Link className="nav-link" to="/login">Login</Link>
            </button>
            <br></br><br></br>
            <h4>New User</h4>
            <br></br>
            <button className="btn btn-primary">
                <Link className="nav-link" to="/register">Register</Link>
            </button>
        </div>
    </>
}

export default Welcome;