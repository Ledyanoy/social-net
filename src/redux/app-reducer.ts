import {loginTC} from "./auth-reducer";
import {inferActionsTypes} from "./redux-store";

const initialState = {
    init: false,
}

export type InitialStateType = typeof initialState
type ActionsType = inferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType=> {
    switch (action.type) {

        case 'SN/APP/SET_INIT':
            return {
                ...state,
                init: true,
            };
        default:
            return state;
    }
}

export const actions = {
    setInit: () => ({type: 'SN/APP/SET_INIT' as const })
}


export const setInitTC = () => (dispatch: any) => {
    let promise = dispatch(loginTC())
    Promise.all([promise]).then(() => {
        dispatch(actions.setInit());
    })

}
export default appReducer;
