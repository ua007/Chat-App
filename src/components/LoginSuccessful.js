import Nav from './Nav.js';

function LoginSuccessful() {
    return (<>
        {/* rendered to Nav component */}
        <Nav />
        {/* fetching logged in user email */}
        <h2>Welcome {JSON.parse(localStorage.getItem("loggedInUserDetails")).email}</h2>
    </>)
}

export default LoginSuccessful;