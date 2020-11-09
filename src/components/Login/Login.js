import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {tryLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {requiredField} from "../../utils/validators/validators";
import {createFiled, FormInput} from "../Common/FormFields/FormFields";
import {Redirect} from "react-router-dom";
import {holeFormError, loginOuter, loginFrom, checkBox} from './Login.module.css';


class LoginContainer extends Component {

    getValuesFromForm = values => {
        let formObject = {
            email: values.login,
            password: values.password,
            rememberMe: values.rememberMe,
            captcha: values.captcha,

        };
        this.props.tryLogin(formObject);
    }

    render() {
        if (this.props.isAuth) {
            return  <Redirect to={'/profile'}/>
        }
        return (
            <div className={loginOuter}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.getValuesFromForm} captchaUrl={this.props.captchaUrl}/>
            </div>
        )
    }
}


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={loginFrom}>
            {createFiled("login",'login',FormInput, [requiredField] , {type: 'text'})}
            {createFiled("password",'password',FormInput, [requiredField] , {type: 'password'})}
            <div className={checkBox}>{createFiled("rememberMe",'',FormInput, [], {type: 'checkbox'}, 'Запомнить меня')}</div>


            { error && <div className={holeFormError}>{error}</div> }
            { captchaUrl && <img src={captchaUrl} alt=""/> }
            { captchaUrl && createFiled("captcha",'',FormInput, [requiredField], {}, 'Введите символы с картинки')}

            <button type="submit">Войти</button>

        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = state => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    }
}

export const Login = connect(mapStateToProps, {tryLogin})(LoginContainer);