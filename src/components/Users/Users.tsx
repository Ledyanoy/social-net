import React from 'react';
import User from "./User";

import Paginator from "../Common/Paginator";
import style from "./users.module.css";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    users: Array<UserType>
    followTC: (userId: number)=> void
    unfollowTC:(userId: number)=> void
    isButtonDisabled: Array<number>

}

const Users:React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, changePage, users, ...props}) => {

    const userList = users.map(user => <User key={user.id} user={user}
                                                   followTC={props.followTC}
                                                   unfollowTC={props.unfollowTC}
                                                   isButtonDisabled={props.isButtonDisabled}
                                                   />);


    return (
        <div >
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       changePage={changePage}
            />

            <div>
                <ul className={style.usersLIst}>
                    {userList}
                </ul>
            </div>
        </div>
    )

}


export default Users;