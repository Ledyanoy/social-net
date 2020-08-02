import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {tryLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {requiredField} from "../../utils/validators/validators";
import {FormInput} from "../Common/FormFields/FormFields";
import {Redirect} from "react-router-dom";
import {holeFormError} from './Login.module.css';


class LoginContainer extends Component {

    getValuesFromForm = values => {
        let formObject = {
            email: values.login,
            password: values.password,
            rememberMe: values.rememberMe,
            captcha: true
        };
        this.props.tryLogin(formObject);
    }

    render() {
        if (this.props.isAuth) {
            return  <Redirect to={'/profile'}/>
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.getValuesFromForm}/>
            </div>
        )
    }
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login"
                       placeholder='login'
                       component={FormInput}
                       type="text"
                       validate={requiredField}/>
            </div>
            <div>
                <Field name="password"
                       placeholder='password'
                       component={FormInput}
                       type="password"
                       validate={requiredField}/>
            </div>
            <div>
                <Field name="rememberMe"
                       component={FormInput}
                       type="checkbox"/>
            </div>
            {props.error && <div className={holeFormError}>{props.error}</div>}

            <button type="submit">Submit</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const Login = connect(mapStateToProps, {tryLogin})(LoginContainer);
