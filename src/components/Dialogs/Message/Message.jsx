import React from 'react';
import {message , me} from './../Dialogs.module.css';


const Message = ({state}) => {
    return (
        <li className={`${message} ${state.me ? me : ''}`}>
            {state.message}
        </li>
    )
}


export default Message;