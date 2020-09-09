import React from "react";
import {formField, error} from './FormFields.module.css';
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const FormTextarea =({input, meta, placeholder,...props})=> {
    return (
        <div className={formField + ' '+ (meta.touched && meta.error && error)} >
            <textarea {...input} {...props} placeholder={placeholder}/>
            <span>{meta.touched && meta.error && meta.error}</span>
        </div>
    )
}

export const FormInput =({input, meta, placeholder, ...props})=> {
    return (
        <div className={formField + ' '+ (meta.touched && meta.error && error)} >
            <input {...input} {...props} placeholder={placeholder}/>
            <span>{meta.touched && meta.error && meta.error}</span>
        </div>
    )
}

export const createFiled = (name, placeholder='', component, validate=[], props, text='') => {
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