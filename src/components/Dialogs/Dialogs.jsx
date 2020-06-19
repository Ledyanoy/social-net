import React from 'react';
import {dialogs, dialogList, dialog, messages, message, active} from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={dialogs}>
            <ul className={dialogList}>
                <li className={dialog}>
                    <NavLink to='/dialogs/1'>Artemiy</NavLink>
                </li>
                <li className={`${dialog} ${active}`}>
                    <NavLink to='/dialogs/2'>Arina</NavLink>
                </li>
                <li className={dialog}>
                    <NavLink to='/dialogs/3'>Kseniya</NavLink>
                </li>
                <li className={dialog}>
                    Dog
                </li>
                <li className={dialog}>
                    Cat
                </li>
            </ul>
            <ul className={messages}>
                <li className={message}>
                    hi
                </li>
                <li className={message}>
                    How are you
                </li>
                <li className={message}>
                    Buy!
                </li>
            </ul>
        </div>

    )
}

export default Dialogs;