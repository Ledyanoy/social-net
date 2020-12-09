import React from "react";
import style from './FormFields.module.css';
import {requiredField, ValidatorType} from "../../../utils/validators/validators";
import {Field} from "redux-form";


type FormFieldsParamsType = {
    input: string
    meta: {
        touched: boolean
        error: string
    }
    placeholder: string
}

export type FormFieldsType = (params: FormFieldsParamsType) => React.ReactNode

export const FormTextarea: FormFieldsType = ({input, meta, placeholder, ...props}) => {
    return (
        <div className={style.formField + ' ' + (meta.touched && meta.error && style.error)}>
            <textarea {...input} {...props} placeholder={placeholder}/>
            <span>{meta.touched && meta.error && meta.error}</span>
        </div>
    )
}

export const FormInput: FormFieldsType = ({input, meta, placeholder, ...restProps}) => {
    return (
        <div className={style.formField + ' ' + (meta.touched && meta.error && style.error)}>
            <input {...input} {...restProps} placeholder={placeholder} />
            <span>{meta.touched && meta.error && meta.error}</span>
        </div>
    )
}

export function createFiled<FormKeysType extends string>(name: FormKeysType, placeholder = '', component: FormFieldsType, validate: Array<ValidatorType>, props = {}, text = '') {
    return (
    <div>
        <Field name={name}
               id={name}
               placeholder={placeholder}
               component={component}
               validate={validate}
               {...props}
        />
        <label htmlFor={name}>{text}</label>
    </div>
    )
}