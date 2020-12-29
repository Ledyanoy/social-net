import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {tryLogin} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {requiredField} from "../../utils/validators/validators";
import {createFiled, FormInput, GetStringKeys} from "../Common/FormFields/FormFields";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';
import {AppStateType} from "../../redux/redux-store";


export const LoginPage: React.FC = (props) => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const dispatch = useDispatch();

    const getValuesFromForm = (values: LoginFormValuesTypes) => {

        dispatch(tryLogin(values.login, values.password, values.rememberMe, values.captcha));
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.loginOuter}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={getValuesFromForm} captchaUrl={captchaUrl}/>
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
    rememberMe: boolean
}

export type LoginFormValuesTypesValues = GetStringKeys<LoginFormValuesTypes>


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesTypes, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                                 handleSubmit,
                                                                                                                 error,
                                                                                                                 captchaUrl
                                                                                                             }) => {
    return (
        <form onSubmit={handleSubmit} className={style.loginFrom}>
            {createFiled<LoginFormValuesTypesValues>("login", 'login', FormInput, [requiredField], {type: 'text'})}
            {createFiled<LoginFormValuesTypesValues>("password", 'password', FormInput, [requiredField], {type: 'password'})}
            <div
                className={style.checkBox}>{createFiled("rememberMe", '', FormInput, [], {type: 'checkbox'}, 'Запомнить меня')}</div>


            {error && <div className={style.holeFormError}>{error}</div>}
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createFiled<LoginFormValuesTypesValues>("captcha", '', FormInput, [requiredField], {}, 'Введите символы с картинки')}

            <button type="submit">Войти</button>

        </form>
    )
}


let LoginReduxForm = reduxForm<LoginFormValuesTypes, LoginFormOwnProps>({
    form: 'login'
})(LoginForm);

