import React from 'react';
import {navbar, item, activeLink, link} from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <ul className={navbar}>
            <li className={item}>
                <NavLink to="/profile" className={link} activeClassName={activeLink}>Profile</NavLink>
            </li>
            <li className={item}>
                <NavLink to="/dialogs" className={link} activeClassName={activeLink}>Dialogs</NavLink>
            </li>
            <li className={`${item} ${activeLink}`}>
                <NavLink to="/messages" className={link} activeClassName={activeLink}>Massages</NavLink>
            </li>
            <li className={item}>
                <NavLink to="/news" className={link} activeClassName={activeLink}>News</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;