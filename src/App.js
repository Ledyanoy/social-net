import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = ({state}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state.navBar}/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
