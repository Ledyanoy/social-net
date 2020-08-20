import React from "react";
import {createFiled, FormInput, FormTextarea} from "../../Common/FormFields/FormFields";
import {reduxForm} from "redux-form";
import {holeFormError} from "../../Login/Login.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>Name {createFiled('FullName', 'Full Name', FormInput, [], {}, '')}</li>
                <li>About : {createFiled('AboutMe', 'About', FormTextarea, [], {}, '')}</li>
                <li>Looking for a Job : {createFiled('LookingForAJob', '', 'input', [], {type: 'checkbox'}, '')}</li>
                <li>My professional
                    skills : {createFiled('LookingForAJobDescription', 'Write your Skills', FormTextarea, [], {}, '')}</li>
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

const ProfileDataReduxForm = reduxForm({
    form: 'UserData'
})(ProfileDataForm);

export default ProfileDataReduxForm;