const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 2,
                message: state.newMessageText,
                me: true
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case CHANGE_MESSAGE_VALUE:
            state.newMessageText = action.value;
            return state;
        default:
            return state;
    }
}

export const changeMessageValueActionCreator = (value) => {
    const action = {type: CHANGE_MESSAGE_VALUE, value: value};
    return action;
}

export const addMessageActionCreator = () => {
    const action = {type: ADD_MESSAGE};
    return action;
}

export default dialogReducer;
