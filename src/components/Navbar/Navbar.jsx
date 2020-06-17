import React from 'react';
import  {navbar, item, active} from './Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={navbar}>
            <li className={item}><a href="">Profile</a></li>
            <li className={`${item} ${active}`}><a href="">Massages</a></li>
            <li className={item}><a href="">News</a></li>
        </ul>
    )
}

export default Navbar;