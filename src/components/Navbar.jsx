import React from 'react';
import  {navbar, item} from './Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={navbar}>
            <li className={item}><a href="">Profile</a></li>
            <li className={item}><a href="">Massages</a></li>
            <li><a href="">News</a></li>
        </ul>
    )
}

export default Navbar;