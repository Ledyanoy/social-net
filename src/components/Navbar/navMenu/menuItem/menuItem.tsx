import React from 'react';
// @ts-ignore
import {item, activeLink, link} from './menuItem.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    link: string
    name: string
}

const MenuItem:React.FC<PropsType> = (props) => {

    return (
            <li className={item}>
                <NavLink to={props.link} className={link} activeClassName={activeLink}>{props.name}</NavLink>
            </li>
    )
}

export default MenuItem;
