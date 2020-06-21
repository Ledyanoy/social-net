import React from 'react';
import {navbar} from './Navbar.module.css';
import NavMenu from "./navMenu/navMenu";

const Navbar = ({state}) => {
    return (
        <div className={navbar}>
            <NavMenu state={state.menu}/>
        </div>
    )
}

export default Navbar;