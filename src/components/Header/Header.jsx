import React from "react";
import {header, login} from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header}>
            <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="logo" />
            <div className={login}>
                {props.isAuth
                    ? <ul><li>{props.login}</li><li>{props.userId}</li><li>{props.email}</li></ul>
                    : <NavLink className={login} to={'/login'}>Login</NavLink>}
            </div>
            {
                props.isAuth && <button onClick={props.tryLogOut}>Logout</button>
            }

        </header>
    )
}
export default Header;