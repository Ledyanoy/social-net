const ADD_POST = 'ADD-POST';
const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
    postsData: [
        {id: 1, message: `Hi, world!`, likesCount: 2},
        {id: 2, message: 'Bruh', likesCount: 1000},
        {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
        {id: 4, message: 'Limp Bizkit', likesCount: 777},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_POST_VALUE:
            return {...state, newPostText: action.value };

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData,
                    {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 0,
                    }],
                newPostText: '',
            }
        case SET_PROFILE :
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const changePostValueActionCreator = (value) => {
    const action = {type: CHANGE_POST_VALUE, value: value};
    return action;
}

export const addPostActionCreator = () => {
    const action = {type: ADD_POST};
    return action;
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile });


export default profileReducer;
