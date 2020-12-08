import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {usersApi} from "../components/api/users-api";
import {profileApi} from "../components/api/profile-api";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: 'This is Heaven',
}

export type  InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    post: string
}
export const addPostActionCreator = (post: string): AddPostActionCreatorActionType => {
    return  {type: ADD_POST, post};
}

type SetProfileActionType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile:ProfileType):SetProfileActionType => ({type: SET_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type SavePhotoSuccessActionType = {
    type: typeof UPDATE_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType ): SavePhotoSuccessActionType => ({type: UPDATE_PHOTO, photos});

export const changeProfile = (userId: number) => {
    return async (dispatch:any) => {
        let response = await profileApi.getProfile(userId);
        dispatch(setProfile(response));
    }
}

export const getUserStatus = (userId: number) => {
    return async (dispatch:any) => {
        let data = await profileApi.getStatus(userId);
        dispatch(setStatus(data));
    }
}

export const setUserStatus = (status: string) => {
    return async (dispatch:any) => {
        try {
            let data = await profileApi.updateStatus(status);
            if (data.resultCode !== 0) return;
            dispatch(setStatus(status));
        } catch (error) {
            console.log(error);
        }
    }
}

export const savePhoto = (file: string) => {
    return async (dispatch:any) => {
        let data = await profileApi.savePhoto(file);
        if (data.resultCode !== 0) return;
        dispatch(savePhotoSuccess(data.data));
    }
}

export const saveProfile = (profile: ProfileType) => {
    return async (dispatch: any, getState:any) => {
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
