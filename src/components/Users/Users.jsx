import React from 'react';
import User from "./User";
import {pagination, selected} from './users.module.css';


const Users = (props) => {

    const userlist = props.users.map(user => <User key={user.id} user={user}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}
                                                   isButtonDisabled={props.isButtonDisabled}
                                                   setButtonDisabled={props.setButtonDisabled}/>);
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    ;
    const paginationPages = pages.map(page => {
        return <li className={props.currentPage === page && selected} onClick={() => {
            props.changePage(page)
        }}>{page}</li>
    })

    return (
        <div>
            <ul className={pagination}>
                {paginationPages}
            </ul>

            <div>
                <ul>
                    {userlist}
                </ul>
            </div>
        </div>
    )

}


export default Users;