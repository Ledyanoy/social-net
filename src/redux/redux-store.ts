import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import navbarReducer from "./navbar-reucer";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

const rootReducer = combineReducers(
    {
        navBar: navbarReducer,
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer,
    });

// const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));

// @ts-ignore
window.store = store;

export default store;
