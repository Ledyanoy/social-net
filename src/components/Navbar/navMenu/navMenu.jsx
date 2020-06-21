import React from 'react';
import {menu} from './navMenu.module.css';
import MenuItem from "./menuItem/menuItem";

const NavMenu = ({state}) => {
    const MenuItems = state.map((item) => <MenuItem state={item}/>);
    return (
        <ul className={menu}>
            {MenuItems}
        </ul>
    )
}

export default NavMenu;