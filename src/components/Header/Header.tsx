import React from "react";

import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {tryLogOut} from "../../redux/auth-reducer";


type PropsType = {}

export const Header: React.FC<PropsType> = (props) => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)
    const userId = useSelector((state: AppStateType) => state.auth.userId)
    const email = useSelector((state: AppStateType) => state.auth.email)

    const dispatch = useDispatch()

    const onButtonClick = () => {
        dispatch(tryLogOut());
    }

    return (
        <header className={style.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="logo"/>
            <div className={style.login}>
                {isAuth
                    ? <ul className={style.userInfo}>
                        <li>{login}</li>
                        <li>{userId}</li>
                        <li>{email}</li>
                    </ul>
                    : <NavLink className={style.loginButton} to={'/login'}>Войти</NavLink>}
            </div>
            {
                isAuth && <button className={style.loginButton} onClick={onButtonClick}>Выйти</button>
            }
        </header>
    )
}
