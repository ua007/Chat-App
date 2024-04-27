import { Navigate } from 'react-router-dom';

function Logout() {
    localStorage.removeItem("logedinUserId");
    return <>
        <Navigate to="/" />
    </>
}

export default Logout;