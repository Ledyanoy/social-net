import {connect} from "react-redux";
import Users from "./Users";
import {
    addUsers,
    changeCurrentPage,
    follow,
    setIsFetching,
    setTotalCount,
    unfollow,
    setButtonDisabled,
} from "../../redux/users-reducer";
import React, {Component} from "react";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers, usersApi} from "../api/api";

class UsersContainerApi extends Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.addUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    changePage = (page) => {
        this.props.setIsFetching(true);
        this.props.changeCurrentPage(page);
        usersApi.getUsers(page, this.props.pageSize).then(data => {
            this.props.addUsers(data.items);
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
                   isButtonDisabled={this.props.isButtonDisabled}
                   setButtonDisabled={this.props.setButtonDisabled}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isButtonDisabled: state.usersPage.isButtonDisabled,
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    addUsers,
    changeCurrentPage,
    setTotalCount,
    setIsFetching,
    setButtonDisabled,
})(UsersContainerApi);

export default UsersContainer;