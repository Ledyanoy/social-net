import React, {useEffect} from 'react';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {
    useEffect(()=> {
        ws.addEventListener('message', (e)=> {
            console.log(JSON.parse(e.data));
        })
    }, [])


    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: React.FC = () => {

    const messages = [1,2,3,4]
    return (
        <ul style={ {height: '500px', overflow: 'auto'}}>
            {messages.map((m: any) => <Message key={m}/>)}
            {messages.map((m: any) => <Message key={m}/>)}
            {messages.map((m: any) => <Message key={m}/>)}
        </ul>
    );
};

const Message: React.FC = () => {
    const message = {
        url: 'https://via.placeholder.com/30',
        author: 'dima',
        text: 'dsfgdsfgdsf',
    }

    return (
        <li>
            <img src={message.url}/>
            <p><b>{message.author}</b></p>
            <p>{message.text}</p>
            <hr/>

        </li>
    );
};


const AddMessageForm: React.FC = () => {
    return (
        <div>
            <div><textarea/></div>
            <button>send</button>

        </div>
    );
};


export default ChatPage;


