import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPage,
    getUsersTC, followTC, unfollowTC,
} from "../../redux/users-reducer";
import React, {Component} from "react";
import Preloader from "../Common/Preloader/Preloader";
import { getUsersSuperSelector} from "../../redux/selectors";


class UsersContainerApi extends Component {

    componentDidMount() {
        const {currentPage,pageSize } = this.props;
        this.props.getUsersTC(currentPage, pageSize);

    }

    changePage = (page) => {
        const {pageSize} = this.props;
        this.props.getUsersTC(page, pageSize);
        this.props.changeCurrentPage(page);
    }


    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unfollowTC={this.props.unfollowTC}
                   followTC={this.props.followTC}
                   changePage={this.changePage}
                   users={this.props.users}
                   isButtonDisabled={this.props.isButtonDisabled}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isButtonDisabled: state.usersPage.isButtonDisabled,
    }
}


const UsersContainer = connect(mapStateToProps, {
    changeCurrentPage,
    getUsersTC,
    followTC,
    unfollowTC
})(UsersContainerApi);

export default UsersContainer;