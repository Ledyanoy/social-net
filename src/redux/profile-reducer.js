const ADD_POST = 'ADD-POST';
const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_POST_VALUE:
            state.newPostText = action.value;
            return state;
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
