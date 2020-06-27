import React from 'react';
import {dialogs, dialogList, messages, actions} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = ({state, dispatch}) => {

    const DialogsElements = state.dialogsData.map((dialog) => <DialogItem state={dialog}/>);
    const MessagesElements = state.messageData.map((message) => <Message state={message}/>);



    const addReplic = () => {
        dispatch(addMessageActionCreator())

    }

    const messageChange = (e) => {
        const text = e.target.value;
        dispatch(changeMessageValueActionCreator(text));
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
                <input type="text"  value={state.newMessageText} onChange={messageChange}/>
                <button onClick={addReplic}>Написать</button>
            </div>
        </div>

    )
}

export default Dialogs;