import React from 'react';
import {dialog, active} from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <li className={dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={active}>{name}</NavLink>
        </li>
    )
}


export default DialogItem;