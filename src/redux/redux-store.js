import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reucer";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

const reducers = combineReducers(
    {
        navBar: navbarReducer,
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
    });

const store = createStore(reducers);

export default store;