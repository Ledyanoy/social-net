import React, {useEffect, useState} from 'react';
import {message} from "antd";

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

    const [ws, setWs] = useState<WebSocket | null>(null)


    useEffect(() => {
        let webChanel: WebSocket

        const closeHandler = () => {
            setTimeout(createChanel, 3000)
        }

        const createChanel = () => {
            webChanel?.removeEventListener('close', closeHandler)
            webChanel?.close()

            webChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            webChanel.addEventListener('close', closeHandler)
            setWs(webChanel)
        }

        createChanel()

        return () => {
            webChanel.removeEventListener('close', closeHandler)
            webChanel.close()
        }

    }, [])

    return (
        <div>
            <Messages ws={ws}/>
            <AddMessageForm ws={ws}/>
        </div>
    );
};

const Messages: React.FC<{ ws: WebSocket | null }> = ({ws}) => {
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])

    useEffect(() => {
        const onMessageHandler = (e: MessageEvent) => {
            console.log(JSON.parse(e.data));
            let newMessages = JSON.parse(e.data);
            setMessages(prevMessages => [...prevMessages, ...newMessages]);
        }
        ws?.addEventListener('message', onMessageHandler)

        return () => {
            ws?.removeEventListener('message', onMessageHandler)
        }
    }, [ws])


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


const AddMessageForm: React.FC<{ ws: WebSocket | null }> = ({ws}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus("ready");
        }

        ws?.addEventListener('open', openHandler)

        return () => {
            ws?.removeEventListener('open', openHandler)
        }
    }, [ws])

    const sendMessage = () => {
        if (!message.trim()) return;
        ws?.send(message)
        setMessage('')
    };

    return (
        <div>
            <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/></div>
            <button onClick={sendMessage} disabled={ws == null || readyStatus !== 'ready'}>send</button>
        </div>
    );
}


export default ChatPage;


