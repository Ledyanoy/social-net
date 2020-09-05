import {profileApi, usersApi} from "../components/api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

const initialState = {
    postsData: [
        {id: 1, message: `Hi, world!`, likesCount: 2},
        {id: 2, message: 'Bruh', likesCount: 1000},
        {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
        {id: 4, message: 'Limp Bizkit', likesCount: 777},
    ],
    profile: null,
    status: 'This is Heaven',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData,
                    {
                        id: 5,
                        message: action.post,
                        likesCount: 0,
                    }],
            }
        case SET_PROFILE :
            return {
                ...state,
                profile: action.profile,
            }

        case SET_STATUS :
            return {
                ...state,
                status: action.status,
            }

        case UPDATE_PHOTO :
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}


export const addPostActionCreator = (post) => {
    const action = {type: ADD_POST, post,};
    return action;
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: UPDATE_PHOTO, photos});

export const changeProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersApi.getProfile(userId);
        dispatch(setProfile(response));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getStatus(userId);
        dispatch(setStatus(data));
    }
}

export const setUserStatus = (status) => {
    return async (dispatch) => {
        try {
            let data = await profileApi.updateStatus(status);
            if (data.resultCode !== 0) return;
            dispatch(setStatus(status));
        } catch (error) {
            console.log(error);
        }

    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileApi.savePhoto(file);
        if (data.resultCode !== 0) return;
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const id = getState().auth.userId;
        let data = await profileApi.saveProfile(profile);
        if (data.resultCode === 0) {
            dispatch(changeProfile(id));
        } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'password or login is wrong';
        let action = stopSubmit('UserData', {_error: message});
        // let action = stopSubmit('UserData', {'contacts': {'facebook':  message }});
        dispatch(action);
        return Promise.reject(data.messages[0]);
        }
    }
}

export default profileReducer;
