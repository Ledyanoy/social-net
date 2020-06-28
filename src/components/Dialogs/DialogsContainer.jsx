import React from 'react';
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({store}) => {

    let state = store.getState();

    const addReplic = () => {
        store.dispatch(addMessageActionCreator())

    }

    const messageChange = (value) => {
        store.dispatch(changeMessageValueActionCreator(value));
    }


    return <Dialogs addReplic={addReplic} messageChange={messageChange} state={state.dialogsPage}/>
}

export default DialogsContainer;