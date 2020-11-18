import {usersApi} from "../components/api/api";
import {changeObjectInArray} from "../utils/objectChangers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType, inferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isButtonDisabled: [] as Array<number>, // array of users ids
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: true})
            }

        case 'UNFOLLOW':
            return {
                ...state, users: changeObjectInArray(state.users, "id", action.userId, {followed: false})
            }

        case 'ADD_USERS':
            return {
                ...state, users: action.users
            }

        case 'CHANGE_CURRENT_PAGE':
            return {
                ...state, currentPage: action.page
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'IS_FETCHING':
            return {
                ...state, isFetching: action.isFetch
            }
        case 'IS_BUTTON_DISABLED':
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

type ActionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    follow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    addUsers: (users: Array<UserType>) => ({type: 'ADD_USERS', users} as const),
    changeCurrentPage: (page: number) => ({type: 'CHANGE_CURRENT_PAGE', page} as const),
    setTotalCount: (count: number) => ({type: 'SET_TOTAL_COUNT', count} as const),
    setIsFetching: (isFetch: boolean) => ({type: 'IS_FETCHING', isFetch} as const),
    setButtonDisabled: (isFetch: boolean, userId: number) => ({
        type: 'IS_BUTTON_DISABLED',
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


type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>


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
