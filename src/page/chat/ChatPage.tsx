import React, {useEffect, useState} from 'react';
import {message} from "antd";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            console.log(JSON.parse(e.data));
            let newMessages = JSON.parse(e.data);
            setMessages(prevMessages =>[...prevMessages, ...newMessages]);
        })
    }, [])


    return (
        <ul style={{height: '500px', overflow: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}

        </ul>
    );
};

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {

    return (
        <li>
            <img src={message.photo}/>
            <p><b>{message.userName}</b></p>
            <p>{message.message}</p>
            <hr/>

        </li>
    );
};


const AddMessageForm: React.FC = () => {
    const[message, setMessage] = useState('')

    const sendMessage = () => {
        if(!message) return;
        ws.send(message)
        setMessage('')
    };

    return (
        <div>
            <div><textarea onChange={(e)=> setMessage(e.currentTarget.value)} value={message}/></div>
            <button onClick={sendMessage}>send</button>
        </div>
    );
};


export default ChatPage;


