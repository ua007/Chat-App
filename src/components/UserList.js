import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserList() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
    const userId = JSON.parse(localStorage.getItem("logedinUserId")).id;
    const [id, setId] = useState("");

    const deleteUser = () => {
        const users = JSON.parse(localStorage.getItem("users"));

        for (let i in users) {
            if (users[i].id === id) {
                users.splice(i, 1);
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        setUsers(users);
    }

    const setDeleteId = (id) => {
        setId(id);
    }

    return (<>
        <h1>User List From localStorage</h1>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Email Id</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users && (
                        users.map((item, index) => (
                            <tr key={index}>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td><Link to={`/editUser/${item.id}`} >Edit</Link> | {item.id !== Number(userId) && 
                                (<Link data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDeleteId(item.id)}>Delete</Link>)}</td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={deleteUser} data-bs-dismiss="modal">OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default UserList;