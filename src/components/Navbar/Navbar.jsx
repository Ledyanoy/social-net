import React from 'react';
import {navbar} from './Navbar.module.css';
import NavMenu from "./navMenu/navMenu";
import Friends from "./friends/friends";


const Navbar = ({state}) => {
    return (
        <div className={navbar}>
            <NavMenu state={state.menu}/>
            <Friends state={state.friends}/>
        </div>
    )
}

export default Navbar;