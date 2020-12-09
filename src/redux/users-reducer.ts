import {changeObjectInArray} from "../utils/objectChangers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import { BaseThunkType, inferActionsTypes} from "./redux-store";

import {usersApi} from "../components/api/users-api";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isButtonDisabled: [] as Array<number>, // array of users ids
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: true})
            }

        case 'SN/USERS/UNFOLLOW':
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: false})
            }

        case 'SN/USERS/ADD_USERS':
            return {
                ...state, users: action.users
            }

        case 'SN/USERS/CHANGE_CURRENT_PAGE':
            return {
                ...state, currentPage: action.page
            }
        case 'SN/USERS/SET_TOTAL_COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'SN/USERS/IS_FETCHING':
            return {
                ...state, isFetching: action.isFetch
            }
        case 'SN/USERS/IS_BUTTON_DISABLED':
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

export const actions = {
    follow: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollow: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    addUsers: (users: Array<UserType>) => ({type: 'SN/USERS/ADD_USERS', users} as const),
    changeCurrentPage: (page: number) => ({type: 'SN/USERS/CHANGE_CURRENT_PAGE', page} as const),
    setTotalCount: (count: number) => ({type: 'SN/USERS/SET_TOTAL_COUNT', count} as const),
    setIsFetching: (isFetch: boolean) => ({type: 'SN/USERS/IS_FETCHING', isFetch} as const),
    setButtonDisabled: (isFetch: boolean, userId: number) => ({
        type: 'SN/USERS/IS_BUTTON_DISABLED',
        isFetch,
        userId
    } as const) ,
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes ) => {
    dispatch(actions.setButtonDisabled(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode !== 0) return;
    dispatch(actionCreator(userId));
    dispatch(actions.setButtonDisabled(false, userId));
}

export const getUsersTC = (currentPage: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.setIsFetching(true));
    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(actions.setIsFetching(false));
    dispatch(actions.addUsers(data.items));
    dispatch(actions.setTotalCount(data.totalCount));
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
    let apiMethod = await usersApi.unfollowUser.bind(usersApi);
    let actionCreator = actions.unfollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export const unfollowTC = (userId: number): ThunkType => async (dispatch) => {
    let apiMethod = await usersApi.followUser.bind(usersApi);
    let actionCreator = actions.follow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export default usersReducer;

export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = inferActionsTypes<typeof actions>
