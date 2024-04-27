import Nav from './Nav.js';
// import ChatList from './ChatList.js';

function LoginSuccessful() {
    return (<>
        <Nav />
        {/* <ChatList /> */}
        <h2>Welcome {JSON.parse(localStorage.getItem("logedinUserId")).email}</h2>
    </>)
}

export default LoginSuccessful;