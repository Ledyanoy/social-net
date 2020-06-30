const ADD_POST = 'ADD-POST';
const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';

const initialState = {
        postsData: [
            {id: 1, message: `Hi, world!`, likesCount: 2},
            {id: 2, message: 'Bruh', likesCount: 1000},
            {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
            {id: 3, message: 'Limp Bizkit', likesCount: 777},
        ],
        newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            const copyState = {...state};
            copyState.postsData = [...state.postsData];
            copyState.postsData.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case CHANGE_POST_VALUE: {
            const copyState = {...state};
            copyState.newPostText = action.value;
            return copyState;
        }
        default: return state;
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

export default profileReducer;
