import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = ({postsData}) => {
    const wrappedProfile = () => <Profile postsData={postsData}/>;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={wrappedProfile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
