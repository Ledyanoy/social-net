import {connect} from "react-redux";
import Users from "./Users";
import {addUsersAC, changeCurrentPageAC, followAC, setTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import React, {Component} from "react";
import * as axios from "axios";

class UsersContainerApi extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response.data);
            this.props.addUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    changePage = (page) => {
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.addUsers(response.data.items);
        });
    }


    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      changePage={this.changePage}
                      users={this.props.users}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        addUsers: (users) => {
            dispatch(addUsersAC(users))
        },
        changeCurrentPage: (page) => {
            dispatch(changeCurrentPageAC(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi);

export default UsersContainer;