import React, {useEffect, useState} from 'react';
import {message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/redux-store";

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

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(startMessagesListening())
        }
    }, [])

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    );
};

const Messages: React.FC = () => {
    const messages = useSelector((state:AppStateType) => state.chat.messages)

    return (
        <ul style={{height: '500px', overflow: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </ul>
    );
};

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <li>
            <img src={message.photo}/>
            <p><b>{message.userName}</b></p>
            <p>{message.message}</p>
            <hr/>
        </li>
    );
};


const AddMessageForm: React.FC<{  }> = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message.trim()) return;
        dispatch(sendMessage(message))
        setMessage('')
    };

    return (
        <div>
            <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/></div>
            <button onClick={sendMessageHandler} disabled={false}>send</button>
        </div>
    );
}


export default ChatPage;


