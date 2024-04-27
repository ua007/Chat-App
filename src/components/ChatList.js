import React from 'react';
import './ChatList.css';

class ChatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("users")).find((user) => user.id === Number(JSON.parse(localStorage.getItem("logedinUserId")).id)),
            groupChat: localStorage.getItem("groupChat") ? JSON.parse(localStorage.getItem("groupChat")) : []
        }
    }

    addChat = (event) => {
        event.preventDefault();
        if (event.target.elements.message.value === '') {
            alert("Enter a message");
        } else {
            const groupChat = localStorage.getItem("groupChat") ? JSON.parse(localStorage.getItem("groupChat")) : [];
            groupChat.push({
                "time": new Date().toUTCString(),
                "username": this.state.user.fullname,
                "message": event.target.elements.message.value
            });
            event.target.elements.message.value = null;
            this.setState({groupChat: groupChat});
            localStorage.setItem("groupChat", JSON.stringify(groupChat));
        }
    };

    refreshChats = () => {
        this.setState({
            groupChat: []
        });
        localStorage.setItem("groupChat", JSON.stringify([]));
    }

    render() {

        const user = this.state.user;
        return (<>
            <div className='container row-lg-12 text-center'>
                <h4>Group Chat</h4>
            </div>
            <div className='container row-lg-12 chat-display'>
                {
                    this.state.groupChat.map((item, index) => (
                        <p key={index}> [{item.time}] {item.username} : {item.message} </p>
                    ))
                }
            </div>
            <form onSubmit={this.addChat} onReset={this.refreshChats}>
                <p></p>{user.fullname} <input className='form-control' type="text" name="message" placeholder='Enter message' />
                <input className='btn btn-primary' type="submit" value="Send" />
                <input className='btn btn-primary' type="reset" value="Refresh" />
            </form>
        </>)
    }
}

export default ChatList;