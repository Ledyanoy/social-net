import React from 'react';
import User from "./User";

import Paginator from "../Common/Paginator";
import {usersLIst} from "./users.module.css";


const Users = (props) => {

    const userList = props.users.map(user => <User key={user.id} user={user}
                                                   followTC={props.followTC}
                                                   unfollowTC={props.unfollowTC}
                                                   isButtonDisabled={props.isButtonDisabled}
                                                   />);


    return (
        <div >
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       changePage={props.changePage}
            />

            <div>
                <ul className={usersLIst}>
                    {userList}
                </ul>
            </div>
        </div>
    )

}


export default Users;