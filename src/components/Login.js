import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    // using useNavigate hook for navigation
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const users = JSON.parse(localStorage.getItem("users")); // fetching users from localstorage
        for (let index in users) {
            if (event.target.elements.userId.value === users[index].email) {
                if (event.target.elements.password.value === users[index].password) {
                    navigate("/loginsuccess");
                    // a loggedInUserDetails object is created to store logged in user details.
                    localStorage.setItem("loggedInUserDetails", JSON.stringify(users[index])); 
                    alert("Login Success");
                } else {
                    alert("incorrect password");
                }
            }
        }
    }

    return (<>
        <div className='col-xxl-6'>
            {/* form for user to input login details */}
            <form onSubmit={handleSubmit}>
                UserId  <input className='form-control' type="text" name="userId" placeholder='Enter userId' required />
                Password <input className='form-control' type="password" name="password" placeholder='Enter password' required />
                {/* Login button to submit details & Cancel button to redirect back to main page */}
                <input className='btn btn-primary register-btn' type="submit" value="Login" /> <button className='btn mt-2'><Link to='/'>Cancel</Link></button>
            </form>
        </div>
    </>)
}

export default Login;