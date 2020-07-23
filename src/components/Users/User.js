import React from 'react';
import userLogo from '../../assets/images/user-logo.jpg'
import {avatar} from './users.module.css';
import {NavLink} from "react-router-dom";



const User = ({user, followTC, unfollowTC, isButtonDisabled}) => {
    console.log(isButtonDisabled);
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