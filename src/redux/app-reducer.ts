import {loginTC} from "./auth-reducer";


const SET_INIT = 'SET_INIT';

export type InitialStateType = {
    init: boolean
}

const initialState: InitialStateType = {
    init: false,
}

const appReducer = (state = initialState, action: any): InitialStateType=> {
    switch (action.type) {

        case SET_INIT:
            return {
                ...state,
                init: true,
            };
        default:
            return state;
    }
}


type SetInitActionType = {
    type: typeof SET_INIT
}

export const setInit = ():SetInitActionType => ({type: SET_INIT });

export const setInitTC = () => (dispatch: any) => {
    let promise = dispatch(loginTC())
    Promise.all([promise]).then(() => {
        dispatch(setInit());
    })

}
export default appReducer;
