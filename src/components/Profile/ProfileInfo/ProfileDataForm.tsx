import React from "react";
import {createFiled, FormInput, FormTextarea, GetStringKeys} from "../../Common/FormFields/FormFields";
import {InjectedFormProps, reduxForm} from "redux-form";
// @ts-ignore
import {holeFormError} from "../../Login/Login.module.css";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>Name {createFiled<ProfileTypeKeys>('fullName', 'Full Name', FormInput, [], {}, '')}</li>
                <li>About : {createFiled<ProfileTypeKeys>('aboutMe', 'About', FormTextarea, [], {}, '')}</li>
                <li>Looking for a Job : {createFiled<ProfileTypeKeys>('lookingForAJob', '', FormInput, [], {type: 'checkbox'}, '')}</li>
                <li>My professional
                    skills : {createFiled<ProfileTypeKeys>('lookingForAJobDescription', 'Write your Skills', FormTextarea, [], {}, '')}</li>
                <li>Contacts :
                    <ul>
                        {Object.keys(profile.contacts).map(key => <li key={key}>
                            {key}:
                            {createFiled('contacts.'+ key, key, FormInput, [], {}, '')}</li>)}
                    </ul>
                </li>
            </ul>
            {error && <div className={holeFormError}>{error}</div>}
            <button>Изменить</button>

        </form>
    )
};

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({
    form: 'UserData'
})(ProfileDataForm);

export default ProfileDataReduxForm;
