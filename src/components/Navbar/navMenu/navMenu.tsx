import React from 'react';
// @ts-ignore
import {menu} from './navMenu.module.css';
import MenuItem from "./menuItem/menuItem";
import {MenuLinkType} from "../../../redux/navbar-reucer";

type PropsType = {
    navigation: Array<MenuLinkType>
}


const NavMenu: React.FC<PropsType> = ({navigation}) => {
    const MenuItems = navigation.map((item) => <MenuItem link={item.link} key={item.id} name={item.name}/>);
    return (
            <ul className={menu}>
                {MenuItems}
            </ul>
    )
}

export default NavMenu;
