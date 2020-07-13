import React from 'react';
import userLogo from '../../assets/images/user-logo.jpg'
import {avatar} from './users.module.css';
import {NavLink} from "react-router-dom";


const User = ({user, follow, unfollow}) => {
    return (
        <li>
            <div>
                <NavLink to={'/profile/'+ user.id}>
                    <picture >
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
                    unfollow(user.id)
                }}> unfollow </button>

                : <button onClick={() => {
                    follow(user.id)
                }}> follow </button>
            }

        </li>
    )
}

export default User;