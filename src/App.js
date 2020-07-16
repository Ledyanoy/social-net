import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar";

import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route path='/dialogs'
                       render={() => {
                           return <DialogsContainer/>
                       }}/>

                <Route path='/profile/:userId?' render={() => {
                    return <ProfileContainer/>
                }}/>

                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>
        </div>
    );
}

export default App;
