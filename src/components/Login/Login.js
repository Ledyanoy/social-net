import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {tryLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class LoginContainer extends Component {

    getValuesFromForm = values => {
        console.log(values);
        let formObject = {
            email: values.login,
            password: values.password,
            rememberMe: values.rememberMe,
            captcha: true
        };
        console.log(formObject);
        this.props.tryLogin(formObject);
    }

    render() {
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
                <Field name="login" component="input" type="text"/>
            </div>
            <div>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>
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
