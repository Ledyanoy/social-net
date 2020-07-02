const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE';

const initialState = {
        dialogsData: [
            {
                id: 1,
                name: 'Artemiy',
                img: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'
            },
            {
                id: 2,
                name: 'Arina',
                img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpg'
            },
            {
                id: 3,
                name: 'Kseniya',
                img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpg'
            },
            {
                id: 4,
                name: 'Babushka',
                img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpgg'
            },
            {
                id: 5,
                name: 'Ded',
                img: 'https://image.flaticon.com/icons/svg/147/147144.svg'
            },
            {id: 13, name: 'Cat'},
            {id: 7, name: 'Mishka'},
            {id: 22, name: 'Malishka'},
        ],
        messageData: [
            {id: 1, message: 'hello my friend'},
            {id: 2, message: 'Bruh', me: true},
            {id: 3, message: 'What are you doing?'},
            {id: 5, message: 'You betrying my head, again...', me: true},
            {id: 6, message: 'Khe Khe ;)'},
        ],
        newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE_VALUE:
            return {...state, newMessageText: action.value};

        case ADD_MESSAGE:
            return {...state,
                messageData: [...state.messageData, {
                    id: 2,
                    message: state.newMessageText,
                    me: true
                }],
                newMessageText: '',
            };

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
