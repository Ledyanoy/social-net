import React, {Component} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {tryLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {requiredField} from "../../utils/validators/validators";
import {createFiled, FormInput} from "../Common/FormFields/FormFields";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';
import {AppStateType} from "../../redux/redux-store";




const LoginContainer:React.FC<MapStatePropsType & MapDispatchPropsType> =(props)=> {

    const getValuesFromForm = (values: LoginFormValuesTypes) => {
        // let formObject = {
        //     email: values.login,
        //     password: values.password,
        //     rememberMe: values.rememberMe,
        //     captcha: values.captcha,
        //
        // };
        props.tryLogin(values.login, values.password, values.rememberMe, values.captcha);
    }


        if (props.isAuth) {
            return  <Redirect to={'/profile'}/>
        }
        return (
            <div className={style.loginOuter}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={getValuesFromForm} captchaUrl={props.captchaUrl}/>
            </div>
        )
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesTypes = {
    captcha: string
    password: string
    login: string
    rememberMe:boolean
}

type LoginFormValuesTypesValues = Extract<keyof LoginFormValuesTypes, string>


const LoginForm:React.FC<InjectedFormProps<LoginFormValuesTypes, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={style.loginFrom}>
            {createFiled<LoginFormValuesTypesValues>("login",'login',FormInput, [requiredField] , {type: 'text'})}
            {createFiled<LoginFormValuesTypesValues>("password",'password',FormInput, [requiredField] , {type: 'password'})}
            <div className={style.checkBox}>{createFiled("rememberMe",'',FormInput, [], {type: 'checkbox'}, 'Запомнить меня')}</div>


            { error && <div className={style.holeFormError}>{error}</div> }
            { captchaUrl && <img src={captchaUrl} alt=""/> }
            { captchaUrl && createFiled<LoginFormValuesTypesValues>("captcha",'',FormInput, [requiredField], {}, 'Введите символы с картинки')}

            <button type="submit">Войти</button>

        </form>
    )
}

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    tryLogin: (email: string, password: string, rememberMe: boolean, captcha: null | string ) => void
}


let LoginReduxForm = reduxForm<LoginFormValuesTypes, LoginFormOwnProps>({
    form: 'login'
})(LoginForm);

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    }
}

export const Login = connect(mapStateToProps, {tryLogin})(LoginContainer);
