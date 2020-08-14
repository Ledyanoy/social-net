import React, {Suspense} from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";

import {Route, withRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitTC} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.setInitTC();
    }

    render() {
        if (!this.props.init) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs'
                           render={() => {
                               return (
                                   <Suspense fallback={<div>Загрузка...</div>}>
                                       <DialogsContainer/>
                                   </Suspense>
                               )
                           }}/>

                    <Route path='/profile/:userId?' render={() => {
                        return <ProfileContainer/>
                    }}/>

                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        init: state.app.init,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setInitTC})
)(App);


