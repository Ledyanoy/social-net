import React from "react";
import {header, login, userInfo, loginButton} from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header}>
            <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="logo" />
            <div className={login}>
                {props.isAuth
                    ? <ul className={userInfo}><li>{props.login}</li><li>{props.userId}</li><li>{props.email}</li></ul>
                    : <NavLink className={loginButton} to={'/login'}>Войти</NavLink>}
            </div>
            {
                props.isAuth && <button className={loginButton} onClick={props.tryLogOut}>Выйти</button>
            }

        </header>
    )
}
export default Header;