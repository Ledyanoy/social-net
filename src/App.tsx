import React, {Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

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
// import {Header} from "./components/Header/Header";
import {Button} from "antd";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

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
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
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
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
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
                                <Route path='*' render={() => <PageNotFound/>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
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


