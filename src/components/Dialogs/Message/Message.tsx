import React from 'react';
// @ts-ignore
import {message , me} from './../Dialogs.module.css';
import {MessageType} from "../../../redux/dialogs-reducer";



type PropsType = {
    state: MessageType
}

const Message: React.FC<PropsType> = ({state}) => {
    return (
        <li className={`${message} ${state.me ? me : ''}`}>
            {state.message}
        </li>
    )
}


export default Message;
