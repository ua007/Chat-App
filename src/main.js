import React from 'react';
// imported all components for routing
import Welcome from './components/Welcome.js';
import ChatList from './components/ChatList.js';
import EditUser from './components/EditUser.js';
import UserList from './components/UserList.js';
import DocumentList from './components/DocumentList.js';
import Logout from './components/Logout.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Nav from './components/Nav.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterSuccessful from './components/RegisterSuccessful.js';
import LoginSuccessful from './components/LoginSuccessful.js';


class Main extends React.Component {

    render() {
        return <>
            {/* Routing logic, here components are assigned with their unique routes */}
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome propsData={this.props} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/registerSuccess" element={<RegisterSuccessful />} />
                    <Route path="/loginSuccess" element={<LoginSuccessful />} />
                    {/* Routing for Navbar, here Nav component is default render for all components inside it */}
                    <Route path="/" element={<Nav />}>
                        <Route path="/group_chat" element={<ChatList />} />
                        <Route path="/manage_users" element={<UserList />} />
                        <Route path="/manage_documents" element={<DocumentList />} />
                        {/* id is param variable in this route */}
                        <Route path="/editUser/:id" element={<EditUser />} />
                    </Route>
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </>
    }
}

// exported Main class
export default Main;