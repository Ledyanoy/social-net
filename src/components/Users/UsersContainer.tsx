import {connect} from "react-redux";
import Users from "./Users";
import {
    actions,
    getUsersTC, followTC, unfollowTC,
} from "../../redux/users-reducer";
import React, {Component} from "react";
import Preloader from "../Common/Preloader/Preloader";
import { getUsersSuperSelector} from "../../redux/selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

const changeCurrentPage = actions.changeCurrentPage

type MapTypes = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    isButtonDisabled: Array<number>
}

type DispatchTypes = {
    getUsersTC: (currentPage: number, pageSize:number) => void
    changeCurrentPage: (page: number) => void
    followTC: (userId: number)=> void
    unfollowTC:(userId: number)=> void
}

type OwnTypes = {
    pageTitle: string
}



type PropsType = MapTypes & DispatchTypes & OwnTypes


class UsersContainerApi extends Component<PropsType> {

    componentDidMount() {
        const {currentPage,pageSize } = this.props;
        this.props.getUsersTC(currentPage, pageSize);
    }

    changePage = (page: number) => {
        const {pageSize} = this.props;
        this.props.getUsersTC(page, pageSize);
        this.props.changeCurrentPage(page);
    }


    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
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

const mapStateToProps = (state:AppStateType): MapTypes => {
    return {
        users: getUsersSuperSelector(state),
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isButtonDisabled: state.usersPage.isButtonDisabled,
    }
}


const UsersContainer = connect<MapTypes, DispatchTypes, OwnTypes, AppStateType>(mapStateToProps, {
    changeCurrentPage,
    getUsersTC,
    followTC,
    unfollowTC
})(UsersContainerApi);

export default UsersContainer;