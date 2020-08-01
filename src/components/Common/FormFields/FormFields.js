import React from "react";
import {formField, error} from './FormFields.module.css';

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