import {loginTC} from "./auth-reducer";


const SET_INIT = 'SET_INIT';


const initialState = {
    init: false,
}

const appReducer = (state = initialState, action) => {
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


export const setInit = () => ({type: SET_INIT});

export const setInitTC = () => (dispatch) => {
    let promise = dispatch(loginTC())
    Promise.all([promise]).then(() => {
        dispatch(setInit());
    })

}


export default appReducer;
