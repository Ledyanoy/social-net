import {FormAction} from "redux-form";
import {BaseThunkType, inferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageType} from "../components/api/chat-api";
import {Dispatch} from "redux";

const initialState = {
    messages: [] as Array<ChatMessageType>,
}

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            };

        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: Array<ChatMessageType>) => ({
        type: 'SN/chat/MESSAGES_RECEIVED', payload: messages
    } as const)
}

let _newMessageHandler: ((messages: Array<ChatMessageType>) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe((messages) => {
        dispatch(actions.messagesReceived(messages))
    })
    chatAPI.stop()

}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}


export default chatReducer;

export type InitialStateType = typeof initialState;

type ActionsTypes = inferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>
