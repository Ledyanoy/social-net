const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_BUTTON_DISABLED = 'IS_BUTTON_DISABLED';


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isButtonDisabled: [],
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
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetch
            }
        case IS_BUTTON_DISABLED:
            return {
                ...state,
                isButtonDisabled: action.isFetch
                    ? [...state.isButtonDisabled, action.userId]
                    : state.isButtonDisabled.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const addUsers = (users) => ({type: ADD_USERS, users});
export const changeCurrentPage = (page) => ({type: CHANGE_CURRENT_PAGE, page});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const setIsFetching = (isFetch) => ({type: IS_FETCHING, isFetch});
export const setButtonDisabled = (isFetch, userId) => ({type: IS_BUTTON_DISABLED, isFetch, userId});


export default usersReducer;
