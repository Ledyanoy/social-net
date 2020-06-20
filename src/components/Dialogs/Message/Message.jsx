import React from 'react';
import {message} from './../Dialogs.module.css';


const Message = ({text}) => {
    return (
        <li className={message}>
            {text}
        </li>
    )
}


export default Message;