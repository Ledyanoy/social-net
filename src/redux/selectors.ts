import { createSelector } from 'reselect';
import {AppStateType} from "./redux-store";
import {UserType} from "../types/types";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsersSelector = (state: AppStateType) => {
    return getUsers(state).filter(u => true);
}

export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter
}

export const getUsersSuperSelector = createSelector(getUsers, (users)=> {
       return  users.filter(u => true)
    }
)
