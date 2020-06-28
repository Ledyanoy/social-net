import React from 'react';
import {dialogs, dialogList, messages, actions} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = ({state, addReplic, messageChange}) => {

    const DialogsElements = state.dialogsData.map((dialog) => <DialogItem state={dialog}/>);
    const MessagesElements = state.messageData.map((message) => <Message state={message}/>);



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
                <input type="text"  value={state.newMessageText} onChange={onMessageChange}/>
                <button onClick={onAddReplic}>Написать</button>
            </div>
        </div>

    )
}

export default Dialogs;