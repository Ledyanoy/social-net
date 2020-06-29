import React from 'react';
import {navbar} from './Navbar.module.css';
import NavMenuContainer from "./navMenu/menuItem/NavMenuContainer";
import FriendsContainer from "./friends/FriendsContainer";


const Navbar = () => {
    return (
        <div className={navbar}>
            <NavMenuContainer />
            <FriendsContainer />
        </div>
    )
}

export default Navbar;