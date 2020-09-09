import React from 'react';
import userLogo from '../../assets/images/user-logo.jpg'
import {avatar, userItem} from './users.module.css';
import {NavLink} from "react-router-dom";



const User = ({user, followTC, unfollowTC, isButtonDisabled}) => {
    return (
        <li className={userItem}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <picture>
                         <source srcSet={user.photos.large  || userLogo } media="(min-width: 600px)"/>
                         <img src={user.photos.small || userLogo} alt="MDN" className={avatar}/>
                    </picture>
                </NavLink>
            </div>
            <p>Имя: {user.name}</p>
            <p>Статус: {user.status ? user.status : 'нет статуса'}</p>
            {user.followed
                ? <button disabled={isButtonDisabled.some(id=> id === user.id)} onClick={() => {
                    followTC(user.id)

                }}> Отписаться </button>

                : <button disabled={isButtonDisabled.some(id=> id === user.id)} onClick={() => {
                    unfollowTC(user.id)

                }}> Подписаться </button>
            }

        </li>
    )
}

export default User;