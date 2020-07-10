import {connect} from "react-redux";
import Users from "./Users";
import {addUsersAC, changeCurrentPageAC, followAC, setTotalCountAC, unfollowAC} from "../../redux/users-reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;