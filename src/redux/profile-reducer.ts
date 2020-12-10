import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileApi} from "../components/api/profile-api";
import {BaseThunkType, inferActionsTypes} from "./redux-store";



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

const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {

        case 'SN/PROFILE/ADD-POST':
            return {
                ...state,
                postsData: [...state.postsData,
                    {
                        id: 5,
                        message: action.post,
                        likesCount: 0,
                    }],
            }
        case 'SN/PROFILE/SET_PROFILE' :
            return {
                ...state,
                profile: action.profile,
            }

        case 'SN/PROFILE/SET_STATUS' :
            return {
                ...state,
                status: action.status,
            }

        case 'SN/PROFILE/UPDATE_PHOTO' :
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (post: string) => {
        return  {type: 'SN/PROFILE/ADD-POST', post} as const;
    },
    setProfile: (profile:ProfileType) => ({type: 'SN/PROFILE/SET_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType ) => ({type: 'SN/PROFILE/UPDATE_PHOTO', photos} as const)
}




export const changeProfile = (userId: number):ThunkType => {
    return async (dispatch) => {
        let response = await profileApi.getProfile(userId);
        dispatch(actions.setProfile(response));
    }
}

export const getUserStatus = (userId: number):ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.getStatus(userId);
        dispatch(actions.setStatus(data));
    }
}

export const setUserStatus = (status: string):ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileApi.updateStatus(status);
            if (data.resultCode !== 0) return;
            dispatch(actions.setStatus(status));
        } catch (error) {
            console.log(error);
        }
    }
}

export const savePhoto = (file: File):ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.savePhoto(file);
        if (data.resultCode !== 0) return;
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType):ThunkType => {
    return async (dispatch, getState) => {
        const id = getState().auth.userId;
        let data = await profileApi.saveProfile(profile);
        if (data.resultCode === 0) {
            dispatch(changeProfile(Number(id)));
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

export type  InitialStateType = typeof initialState

type ActionsTypes = inferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>
