import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = ({state, dispatch}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.navBar}/>
            <div className='app-wrapper__content'>
                <Route path='/dialogs'
                       render={() => {
                           return (
                               <Dialogs state={state.dialogsPage}
                                        dispatch={dispatch}
                                        newMessageText={state.dialogsPage.newMessageText}
                               />)
                       }}/>
                <Route path='/profile' render={() => {
                    return (
                        <Profile state={state.profilePage}
                                 dispatch={dispatch}
                        /> )
                }} />

            </div>
        </div>
    );
}

export default App;
