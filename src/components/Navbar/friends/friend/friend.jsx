import React from 'react';
import {item, active, link, avatar} from './../friends.module.css';
import {NavLink} from "react-router-dom";


const Friend = ({state}) => {
    return (
        <li className={item}>
            <NavLink to={`/dialogs/${state.id}`} activeClassName={active} className={link}>
                <img src={`${state.img ? state.img : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}`} className={avatar} alt={state.name}/>
                {state.name}
            </NavLink>
        </li>
    )
}

export default Friend;