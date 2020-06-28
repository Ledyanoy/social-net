import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className='app-wrapper__content'>
                <Route path='/dialogs'
                       render={() => {
                           return (
                               <DialogsContainer store={props.store}
                               />)
                       }}/>
                <Route path='/profile' render={() => {
                    return (
                        <Profile store={props.store}
                        /> )
                }} />

            </div>
        </div>
    );
}

export default App;
