import React from 'react';
import {dialogs, dialogList, messages, actions} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = ({dialogsPage, addReplic, messageChange}) => {

    const DialogsElements = dialogsPage.dialogsData.map((dialog) => <DialogItem key={dialog.id} state={dialog}/>);
    const MessagesElements = dialogsPage.messageData.map((message) => <Message key={message.id} state={message}/>);



    const onAddReplic = () => {
        addReplic();
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        messageChange(text);
    }


    return (
        <div className={dialogs}>
            <ul className={dialogList}>
                {DialogsElements}
            </ul>
            <ul className={messages}>
                {MessagesElements}
            </ul>
            <div className={actions}>
                <input type="text"  value={dialogsPage.newMessageText} onChange={onMessageChange}/>
                <button onClick={onAddReplic}>Написать</button>
            </div>
        </div>

    )
}

export default Dialogs;