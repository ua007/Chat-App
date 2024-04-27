import React from 'react';
// imported css file for chatList component
import './ChatList.css';

class ChatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             // fetch logged in user details from localStorage
            user: JSON.parse(localStorage.getItem("users")).find((user) => user.id === Number(JSON.parse(localStorage.getItem("loggedInUserDetails")).id)), 
            // fetch groupChats from localStorage
            groupChat: localStorage.getItem("groupChat") ? JSON.parse(localStorage.getItem("groupChat")) : []  
        }
    }

    addChat = (event) => {
        event.preventDefault();
        if (event.target.elements.message.value === '') {
            alert("Enter a message");
        } else {
            const groupChat = localStorage.getItem("groupChat") ? JSON.parse(localStorage.getItem("groupChat")) : [];
            // adding new chat to groupChat list
            groupChat.push({
                "time": new Date().toUTCString(),
                "username": this.state.user.fullname,
                "message": event.target.elements.message.value
            });
            // clearing the form input
            event.target.elements.message.value = null;
            // replacing new groupchat array to state
            this.setState({groupChat: groupChat});
            // replacing new groupchat array to localstorage
            localStorage.setItem("groupChat", JSON.stringify(groupChat));
        }
    };

    refreshChats = () => {
        // groupchat cleared from state & localstorage
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
                    // using map to display lost of chats with unique index
                    this.state.groupChat.map((item, index) => (
                        <p key={index}> [{item.time}] {item.username} : {item.message} </p>
                    ))
                }
            </div>
            {/* form to add new message  */}
            <form className='form-inline' onSubmit={this.addChat} onReset={this.refreshChats}>
                {user.fullname} <input className='form-control' type="text" name="message" placeholder='Enter message' />
                <input className='btn btn-primary' type="submit" value="Send" />
                <input className='btn btn-primary' type="reset" value="Refresh" />
            </form>
        </>)
    }
}

export default ChatList;