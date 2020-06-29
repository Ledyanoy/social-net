import React from 'react';
import {item, activeLink, link} from './menuItem.module.css';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {

    return (
            <li className={item}>
                <NavLink to={props.link} className={link} activeClassName={activeLink}>{props.name}</NavLink>
            </li>
    )
}

export default MenuItem;