import {usersApi} from "../components/api/api";
import {changeObjectInArray} from "../utils/objectChangers";
import {UserType} from "../types/types";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_BUTTON_DISABLED = 'IS_BUTTON_DISABLED';



const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isButtonDisabled: [] as Array<number>, // array of users ids
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType=> {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: false})
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

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod:any, actionCreator: any) => {
    dispatch(setButtonDisabled(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode !== 0) return;
    dispatch(actionCreator(userId));
    dispatch(setButtonDisabled(false, userId));
}

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId:number): FollowActionType => ({type: FOLLOW, userId});

type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollow = (userId:number):UnfollowActionType => ({type: UNFOLLOW, userId});

type AddUsersActionType = {
    type: typeof ADD_USERS
    users: Array<UserType>
}
export const addUsers = (users:Array<UserType>):AddUsersActionType => ({type: ADD_USERS, users});

type ChangeCurrentPageActionType = {
    type: typeof CHANGE_CURRENT_PAGE
    page: number
}
export const changeCurrentPage = (page: number):ChangeCurrentPageActionType => ({type: CHANGE_CURRENT_PAGE, page});

type SetTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    count: number
}
export const setTotalCount = (count: number):SetTotalCountActionType => ({type: SET_TOTAL_COUNT, count});

type SetIsFetchingActionType = {
    type: typeof IS_FETCHING
    isFetch: boolean
}
export const setIsFetching = (isFetch:boolean):SetIsFetchingActionType => ({type: IS_FETCHING, isFetch});

type SetButtonDisabledActionType = {
    type: typeof IS_BUTTON_DISABLED
    isFetch: boolean
    userId: number
}
export const setButtonDisabled = (isFetch: boolean, userId: number): SetButtonDisabledActionType => ({type: IS_BUTTON_DISABLED, isFetch, userId});

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(addUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
}

export const followTC = (userId: number) => async (dispatch: any) => {
    let apiMethod = usersApi.unfollowUser.bind(usersApi);
    let actionCreator = unfollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export const unfollowTC = (userId: number) => async (dispatch: any) => {
    let apiMethod = usersApi.followUser.bind(usersApi);
    let actionCreator = follow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export default usersReducer;
