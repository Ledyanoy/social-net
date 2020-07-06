import React from 'react';
import User from "./User";
import * as axios from "axios";


const Users = (props) => {
    if (!props.users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
            console.log(response.data.items);
            props.addUsers(response.data.items);
        })
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