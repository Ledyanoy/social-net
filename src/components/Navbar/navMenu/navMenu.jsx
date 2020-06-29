import React from 'react';
import {menu} from './navMenu.module.css';
import MenuItem from "./menuItem/menuItem";

const NavMenu = ({navigation}) => {
    const MenuItems = navigation.map((item) => <MenuItem link={item.link} name={item.name}/>);
    return (
        <ul className={menu}>
            {MenuItems}
        </ul>
    )
}

export default NavMenu;