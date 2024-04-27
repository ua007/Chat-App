import React from 'react';
import { Navigate, Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    
    // event has form details within target.elements
    handleSubmit = (event) => {
        if (event.target.elements.password.value === event.target.elements.confirmPassword.value) {
            event.preventDefault(); // page will not refresh
            let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // fetch users from localStorage
            //create new user object
            let user = {
                id: Number(new Date()),
                fullname: event.target.elements.fullname.value,
                email: event.target.elements.email.value,
                password: event.target.elements.password.value,
            }
            users.push(user); // adding new user inside users array
            localStorage.setItem("users", JSON.stringify(users)); // replace old with new array
            alert("Registered");
            this.setState({ redirect: true }); // used for nevigating to reg. successful component
        } else {
            alert("Confirm password didn't match, please retry"); // if password & confirm_password don't match
        }
    }

    render() {
        const { redirect } = this.state;
        return (<>
            <div className='row'>
                {
                    redirect && (
                        <Navigate to="/registersuccess" /> // nevigate to registrationSuccessful component
                    )
                }
                <div className='col-xxl-6'>
                    {/* form for user to input reg. details */}
                    <form onSubmit={this.handleSubmit}>
                        Fullname  <input className='form-control' type="text" name="fullname" placeholder='Enter fullname' required />
                        Email  <input className='form-control' type="text" name="email" placeholder='Enter Email' required />
                        Password <input className='form-control' type="password" name="password" placeholder='Enter password' required />
                        Confirm Password <input className='form-control' type="password" name="confirmPassword" placeholder='Enter Confirm Password' required />
                        {/* Registration button to submit reg. & Cancel button to redirect back to main page */}
                        <input className='btn btn-primary register-btn' type="submit" value="Register" /> <button className='btn mt-2'><Link to='/'>Cancel</Link></button>
                    </form>
                </div>
            </div>
        </>)
    }
}

export default Register;