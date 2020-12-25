import {connect} from "react-redux";
import Users from "./Users";
import {
    actions,
    getUsersTC, followTC, unfollowTC, FilterType,
} from "../../redux/users-reducer";
import React, {Component} from "react";
import Preloader from "../Common/Preloader/Preloader";
import {getUsersFilter, getUsersSuperSelector} from "../../redux/selectors";
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
    filter: FilterType
}

type DispatchTypes = {
    getUsersTC: (currentPage: number, pageSize:number, filter: FilterType) => void
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
        const {currentPage,pageSize, filter } = this.props;
        this.props.getUsersTC(currentPage, pageSize, filter);
    }

    changePage = (page: number) => {
        const {pageSize, filter} = this.props;
        this.props.getUsersTC(page, pageSize, filter);
        this.props.changeCurrentPage(page);
    }

    onFilterChanged = (filter:FilterType) => {
        const {pageSize} = this.props;
        this.props.getUsersTC(1, pageSize, filter);
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
                   onFilterChanged={this.onFilterChanged}
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
        filter: getUsersFilter(state)
    }
}


const UsersContainer = connect<MapTypes, DispatchTypes, OwnTypes, AppStateType>(mapStateToProps, {
    changeCurrentPage,
    getUsersTC,
    followTC,
    unfollowTC
})(UsersContainerApi);

export default UsersContainer;
