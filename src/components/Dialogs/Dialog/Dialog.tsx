import React from 'react';
// @ts-ignore
import {dialog, active, avatar, link} from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";


type PropsType = {
    state: DialogType
}

const DialogItem: React.FC<PropsType> = ({state}) => {
    return (
        <li className={dialog}>
            <NavLink to={`/dialogs/${state.id}`} activeClassName={active} className={link}>
                <img src={`${state.img ? state.img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}`} className={avatar} alt={state.name}/>
                {state.name}
            </NavLink>
        </li>
    )
}


export default DialogItem;
