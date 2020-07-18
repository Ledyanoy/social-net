import React from 'react';
import userLogo from '../../assets/images/user-logo.jpg'
import {avatar} from './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersApi} from "../api/api";


const User = ({user, follow, unfollow}) => {
    return (
        <li>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <picture>
                        {user.photos.large
                            ? <source srcSet={user.photos.large} media="(min-width: 600px)"/>
                            : <source srcSet={userLogo} media="(min-width: 600px)"/>
                        }

                        {user.photos.small
                            ? <img src={user.photos.small} alt="MDN" className={avatar}/>
                            : <img src={userLogo} alt="MDN" className={avatar}/>
                        }
                    </picture>
                </NavLink>
            </div>
            {user.name}
            {user.status}
            {user.followed
                ? <button onClick={() => {
                    usersApi.unfollowUser(user.id).then(data => {
                        if (data.resultCode !== 0) return;
                        unfollow(user.id);
                    });
                }}> unfollow </button>

                : <button onClick={() => {
                    usersApi.followUser(user.id).then(data => {
                        if (data.resultCode !== 0) return;
                        follow(user.id);
                    });

                }}> follow </button>
            }

        </li>
    )
}

export default User;