import React, {Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';


import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';

import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
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
import {AppHeader} from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ChatPage = React.lazy(() => import('./page/chat/ChatPage'));

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

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('error');
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
            // <div className='app-wrapper'>
            //     <Header/>
            //     <Navbar/>
            //
            // </div>
            <Layout>
                <AppHeader/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1">
                                        <Link to='/profile'>Profile</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to='/dialogs'>Dialogs</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to='/news'>News</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to='/bookmarks'>Bookmarks</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to='/chat'>Chat</Link>
                                    </Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="4">
                                        <Link to='/users'>users</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
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

                                <Route path='/chat'
                                       render={() => {
                                           return (
                                               <Suspense fallback={<div>Загрузка...</div>}>
                                                   <ChatPage/>
                                               </Suspense>
                                           )
                                       }}/>
                                <Route path='*' render={() => <PageNotFound/>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2020 Created by IT_KAMASUTRA</Footer>
            </Layout>

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


