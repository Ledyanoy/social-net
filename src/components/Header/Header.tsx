import React from "react";
import 'antd/dist/antd.css';

import style from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {tryLogOut} from "../../redux/auth-reducer";
import {Avatar, Col, Menu, Row, Layout, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";


type PropsType = {}

const {Header} = Layout;

export const AppHeader: React.FC<PropsType> = (props) => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)
    const userId = useSelector((state: AppStateType) => state.auth.userId)
    const email = useSelector((state: AppStateType) => state.auth.email)

    const dispatch = useDispatch()

    const onButtonClick = () => {
        dispatch(tryLogOut());
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to='/users'>Developers</Link></Menu.Item>
                    </Menu>
                </Col>


                        {isAuth
                            ? <>
                            <Col span={1}>
                                <Avatar style={{backgroundColor: '#87d068'}} alt={login || 'аватарка'} icon={<UserOutlined/>}/>
                            </Col>
                            <Col span={5}>
                                <Button onClick={onButtonClick}>Выйти</Button>
                            </Col>
                            </>
                            : <Col span={6}>
                                <Link to={'/login'}>Войти</Link>
                            </Col>
                        }




            </Row>
        </Header>
        // <header className={style.header}>
        //     <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="logo"/>
        //     <div className={style.login}>
        //         {isAuth
        //             ? <ul className={style.userInfo}>
        //                 <li>{login}</li>
        //                 <li>{userId}</li>
        //                 <li>{email}</li>
        //             </ul>
        //             : <NavLink className={style.loginButton} to={'/login'}>Войти</NavLink>}
        //     </div>
        //     {
        //         isAuth && <button className={style.loginButton} onClick={onButtonClick}>Выйти</button>
        //     }
        // </header>
    )
}
