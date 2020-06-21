import React from 'react';
import {item, activeLink, link} from './menuItem.module.css';
import {NavLink} from "react-router-dom";

const MenuItem = ({state}) => {

    return (
            <li className={item}>
                <NavLink to={state.link} className={link} activeClassName={activeLink}>{state.name}</NavLink>
            </li>
    )
}

export default MenuItem;