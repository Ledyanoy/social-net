import React from 'react';
import {dialogs, dialogList, messages} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Artemiy'},
        {id: 2, name: 'Arina'},
        {id: 3, name: 'Kseniya'},
        {id: 4, name: 'Babushka'},
        {id: 5, name: 'Ded'},
        {id: 13, name: 'Cat'},
        {id: 7, name: 'Mishka'},
    ];

    const messageData = [
        {id: 1, message: 'hello my friend'},
        {id: 2, message: 'Bruh'},
        {id: 3, message: 'What are you doing?'},
        {id: 5, message: 'You betreing my head, again...'},
    ];

    const DialogsElements = dialogsData.map(({id, name}) => <DialogItem name={name} id={id}/>);

    const MessagesElements = messageData.map(({message}) => <Message text={message}/>);


    return (
        <div className={dialogs}>
            <ul className={dialogList}>
                {DialogsElements}
            </ul>
            <ul className={messages}>
                {MessagesElements}
            </ul>
        </div>

    )
}

export default Dialogs;