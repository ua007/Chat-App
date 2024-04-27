import { Link } from 'react-router-dom';
// import Nav from './Nav.js';

function RegisterSuccessful() {
    return <>
        {/* <Nav /> */}
        <div className='container text-center'>
            <br /><br />
            <h3>Registration Successful</h3>
            <br /><br />
            <p>Thank you for your registration.</p>
            <br />
            <a href=""><Link className="nav-link" to="/">Click to return to home page</Link></a>
        </div>
    </>
}

export default RegisterSuccessful;