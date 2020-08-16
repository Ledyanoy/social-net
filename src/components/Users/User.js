import React from 'react';
import userLogo from '../../assets/images/user-logo.jpg'
import {avatar} from './users.module.css';
import {NavLink} from "react-router-dom";



const User = ({user, followTC, unfollowTC, isButtonDisabled}) => {
    return (
        <li>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <picture>
                         <source srcSet={user.photos.large  || userLogo } media="(min-width: 600px)"/>
                         <img src={user.photos.small || userLogo} alt="MDN" className={avatar}/>
                    </picture>
                </NavLink>
            </div>
            {user.name}
            {user.status}
            {user.followed
                ? <button disabled={isButtonDisabled.some(id=> id === user.id)} onClick={() => {
                    followTC(user.id)

                }}> unfollow </button>

                : <button disabled={isButtonDisabled.some(id=> id === user.id)} onClick={() => {
                    unfollowTC(user.id)

                }}> follow </button>
            }

        </li>
    )
}

export default User;