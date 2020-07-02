import React from 'react';
import User from "./User";


const Users = (props) => {

    if (!props.users.length) {
        props.addUsers([
            {
                id: 1,
                fullName: 'Viktor',
                status: 'I lake dogs... to eat',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true,
            },
            {
                id: 2,
                fullName: 'Aniya',
                status: 'Theres no hope for me anymore',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
            },
            {
                id: 3,
                fullName: 'Joe',
                status: 'Yeah',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true,
            },
            {
                id: 4,
                fullName: 'Markus',
                status: 'What wrong with black people',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true,
            },])
    }


    const userslist = props.users.map(user => <User key={user.id} user={user} follow={props.follow}
                                                    unfollow={props.unfollow}/>)
    return (
        <ul>
            {userslist}
        </ul>
    )
}

export default Users;