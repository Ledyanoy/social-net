const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case ADD_USERS:
            return {
                ...state, users: action.users
            }

        case CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const addUsersAC = (users) => ({type: ADD_USERS, users});
export const changeCurrentPageAC = (page) => ({type: CHANGE_CURRENT_PAGE, page});
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT, count});


export default usersReducer;
