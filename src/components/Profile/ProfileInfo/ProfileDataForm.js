import React from "react";
import {createFiled, FormInput, FormTextarea} from "../../Common/FormFields/FormFields";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return (
        <form>
            <ul>
                <li>Name {createFiled('Name', 'Full Name', FormInput, [], {}, '')}</li>
                <li>About : {createFiled('About', 'About', FormTextarea, [], {}, '')}</li>
                <li>Looking for a Job : {createFiled('Looking for a Job', '', 'input', [], {type: 'checkbox'}, '')}</li>
                <li>My professional
                    skills : {createFiled('Skills', 'Write your Skills', FormTextarea, [], {}, '')}</li>
                <li>Contacts :
                    {/*<ul>*/}
                    {/*    {Object.keys(profile.contacts).map(key => <Contact key={key} title={key}*/}
                    {/*                                                       value={profile.contacts[key]}/>)}*/}
                    {/*</ul>*/}
                </li>
            </ul>

        </form>
    )
};

const ProfileDataReduxForm = reduxForm({
    form: 'UserData'
})(ProfileDataForm);

export default ProfileDataReduxForm;