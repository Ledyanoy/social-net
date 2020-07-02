import React from 'react';


const User = ({user, follow, unfollow}) => {
    return (
        <li>
            {user.fullName}
            {user.status}
            {user.location.country}
            {user.location.city}
            {user.followed
                ? <button onClick={() => { unfollow(user.id) }}> unfollow </button>

                : <button onClick={() => { follow(user.id) }}> follow </button>
            }

        </li>
    )
}

export default User;