import React, {Suspense} from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitTC} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import PageNotFound from "./components/404/PageNotFound";
import {AppStateType} from "./redux/redux-store";
import {UsersPage} from "./components/Users/UsersContainer";
import {Header} from "./components/Header/Header";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},
    {
        type: 'group',
        name: 'Group name',
        items: [
            {name: 'Spanish', value: 'es'},
        ]
    },
];

type MapStateType = ReturnType<typeof mapStateToProps>
type DispatchStateType = {
    setInitTC: () => void
}


class App extends React.Component<MapStateType & DispatchStateType> {

    catchAllUnhandledErrors =(e: PromiseRejectionEvent) => {
        alert( 'error');
        console.error('new error');
    }

    componentDidMount() {
        this.props.setInitTC();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.init) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/profile'/>}/>

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

                        <Route path='/users' render={() => <UsersPage pageTitle={'Самураи'}/>}/>
                        <Route path='/login/facebook' render={() => <div>facebook</div>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='*' render={() => <PageNotFound/>}/>
                    </Switch>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        init: state.app.init,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setInitTC})
)(App);


