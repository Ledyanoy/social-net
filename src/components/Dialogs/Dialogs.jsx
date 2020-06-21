import React from 'react';
import {dialogs, dialogList, messages} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = ({state}) => {

    const DialogsElements = state.dialogsData.map((dialog) => <DialogItem state={dialog}/>);

    const MessagesElements = state.messageData.map((message) => <Message state={message}/>);


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