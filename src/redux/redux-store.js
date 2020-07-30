import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reucer";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers(
    {
        navBar: navbarReducer,
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
    });

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

