import React, {Component} from 'react';
import User from "./User";
import * as axios from "axios";
import {pagination, selected} from './users.module.css';


class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response.data);
            this.props.addUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    changePage(page) {
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.addUsers(response.data.items);
        });
    }


    render() {
        const userlist = this.props.users.map(user => <User key={user.id} user={user} follow={this.props.follow}
                                                            unfollow={this.props.unfollow}/>);
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        ;
        const paginationPages = pages.map(page => {
            return <li className={this.props.currentPage === page && selected} onClick={()=> {this.changePage(page)}}>{page}</li>
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
}


export default Users;