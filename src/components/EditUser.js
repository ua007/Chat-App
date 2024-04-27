import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

function EditUser() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    const user = users.find((user) => user.id === Number(id));
    console.log("editUser", user);

    const editUser = (event) => {
        // iterate through the list of users and update the selected user details
        for (let i in users) {
            if (users[i].id === Number(id)) {
                if (event.target.elements.fullname && event.target.elements.fullname.value !== "") {
                    users[i].fullname = event.target.elements.fullname.value;
                }
                if (event.target.elements.email && event.target.elements.email.value !== "") {
                    users[i].email = event.target.elements.email.value;
                }
            }
        }
        // replace the updated user list to loaclstorage & state
        localStorage.setItem("users", JSON.stringify(users));
        setRedirect(true);
    }

    return (<>
        {   // route back to User List on successful update
            redirect && (
                <Navigate to="/manage_users" />
            )
        }
        <div className="row m-5">
            <h1>Edit User Information for {user.fullname}</h1>
            <div className="col-xxl-4">
                {/* form to edit user details */}
                <form onSubmit={editUser}>
                    Fullname <input className="form-control" type="text" name="fullname" placeholder={user.fullname} />
                    Email <input className="form-control" type="text" name="email" placeholder={user.email} />
                    {/* Edit User button to submit update & Cancel button to redirect back to users list */}
                    <button className="btn mt-2">Save</button> <button className='btn mt-2'><Link to='/manage_users'>Cancel</Link></button>
                </form>
            </div>
        </div>
    </>);
}

export default EditUser;