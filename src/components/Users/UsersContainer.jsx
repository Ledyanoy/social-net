import {connect} from "react-redux";
import Users from "./Users";
import {
    addUsers,
    changeCurrentPage,
    follow,
    setIsFetching,
    setTotalCount,
    unfollow
} from "../../redux/users-reducer";
import React, {Component} from "react";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainerApi extends Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.addUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    changePage = (page) => {
        this.props.setIsFetching(true);
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.addUsers(response.data.items);
            this.props.setIsFetching(false);
        });
    }


    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   changePage={this.changePage}
                   users={this.props.users}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    addUsers,
    changeCurrentPage,
    setTotalCount,
    setIsFetching
})(UsersContainerApi);

export default UsersContainer;