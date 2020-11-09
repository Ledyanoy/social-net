const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
    img?: string
}

type MessageType = {
    id: number
    message: string
    me?: boolean
}

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
    ] as Array<DialogType>,
    messageData: [
        {id: 1, message: 'hello my friend'},
        {id: 2, message: 'Bruh', me: true},
        {id: 3, message: 'What are you doing?'},
        {id: 5, message: 'You betrying my head, again...', me: true},
        {id: 6, message: 'Khe Khe ;)'},
    ] as Array<MessageType>,
    newMessageText: '',
}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, {
                    id: 2,
                    message: action.post,
                    me: true,
                }],
                newMessageText: '',
            };

        default:
            return state;
    }
}

type AddMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE
    post: string
}

export const addMessageActionCreator = (post: string):AddMessageActionCreatorActionType => ({type: ADD_MESSAGE, post});


export default dialogReducer;
