import React from 'react';
import {navbar, item, active} from './Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={navbar}>
            <li className={item}>
                <a href="/profile">Profile</a>
            </li>
            <li className={item}>
                <a href="/dialogs">Dialogs</a>
            </li>
            <li className={`${item} ${active}`}>
                <a href="/messages">Massages</a>
            </li>
            <li className={item}>
                <a href="/news">News</a>
            </li>
        </ul>
    )
}

export default Navbar;