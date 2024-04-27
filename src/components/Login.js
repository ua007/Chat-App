import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userId: null,
//             redirect: false
//         }
//     }

//     handleSubmit = (event) => {
//         const users = JSON.parse(localStorage.getItem("users"));
//         console.log(localStorage.getItem("users"));
//         for (let index in users) {
//             console.log(users[index]);
//             if (event.target.elements.userId.value === users[index].email) {
//                 if (event.target.elements.password.value === users[index].password) {
//                     this.setState({
//                         userId: event.target.elements.userId.value,
//                         redirect: true
//                     });
//                     alert("Login Success");
//                 } else {
//                     alert("incorrect password");
//                 }
//             }
//         }
//     }

//     render() {
//         const { redirect } = this.state;
//         return (<>
//             {
//                 redirect && (
//                     <Navigate to="/loginSuccess" state={{userId: this.state.userId}}/>
//             )
//             }
//             <div className='col-xxl-6'>
//                 <form onSubmit={this.handleSubmit}>
//                     UserId  <input className='form-control' type="text" name="userId" placeholder='Enter userId' required />
//                     Password <input className='form-control' type="password" name="password" placeholder='Enter password' required />
//                     <input className='btn btn-primary register-btn' type="submit" value="Login" />
//                 </form>
//             </div>
//         </>)
//     }
// }

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(localStorage.getItem("users"));
        for (let index in users) {
            console.log(users[index]);
            if (event.target.elements.userId.value === users[index].email) {
                if (event.target.elements.password.value === users[index].password) {
                    // this.setState({
                    //     userId: event.target.elements.userId.value,
                    //     redirect: true
                    // });
                    navigate("/loginsuccess");
                    localStorage.setItem("logedinUserId", JSON.stringify(users[index]));
                    alert("Login Success");
                } else {
                    alert("incorrect password");
                }
            }
        }
    }

    return (<>
        <div className='col-xxl-6'>
            <form onSubmit={handleSubmit}>
                UserId  <input className='form-control' type="text" name="userId" placeholder='Enter userId' required />
                Password <input className='form-control' type="password" name="password" placeholder='Enter password' required />
                <input className='btn btn-primary register-btn' type="submit" value="Login" /> <button className='btn mt-2'><Link to='/'>Cancel</Link></button>
            </form>
        </div>
    </>)
}

export default Login;