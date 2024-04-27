import React from 'react';
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
    constructor(props) {
        super(props);
        console.log("main.js", this.props)
        this.state = {
            uploads: []
        }
    }

    componentDidMount() {
        this.setState({
            uploads: getUploads()
        })
    }

    render() {
        return <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome propsData={this.props} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/registerSuccess" element={<RegisterSuccessful />} />
                    <Route path="/loginSuccess" element={<LoginSuccessful />} />
                    <Route path="/" element={<Nav />}>
                        <Route path="/group_chat" element={<ChatList />} />
                        <Route path="/manage_users" element={<UserList />} />
                        <Route path="/manage_documents" element={<DocumentList uploads={this.state.uploads} />} />
                        
                        <Route path="/editUser/:id" element={<EditUser />} />
                    </Route>
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </>
    }
}

function getUploads() {
    return [
        {
            id: 1,
            label: 'sales report',
            filename: 'sales.xls'
        },
        {
            id: 2,
            label: 'quaterly summary',
            filename: 'summary.xls'
        },
        {
            id: 3,
            label: 'projection',
            filename: 'projection.pdf'
        },
    ]
}

export default Main;