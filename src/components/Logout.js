import { Navigate } from 'react-router-dom';

function Logout() {
    // removing loggedInUserDetails from localstorage
    localStorage.removeItem("loggedInUserDetails");
    return <>
        {/* routing to main page */}
        <Navigate to="/" />
    </>
}

export default Logout;