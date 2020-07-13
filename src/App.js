import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route path='/dialogs'
                       render={() => {
                           return <DialogsContainer/>
                       }}/>

                <Route path='/profile/:userId?' render={() => {
                    return <ProfileContainer/>
                }}/>

                <Route path='/users' render={() => <UsersContainer/>} />

            </div>
        </div>
    );
}

export default App;
