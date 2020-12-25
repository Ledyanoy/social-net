import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer";
import {Simulate} from "react-dom/test-utils";

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FromValuesType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FromValuesType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const convertedValues: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(convertedValues);
        console.log(values);
        setTimeout(() => {

            // alert(JSON.stringify(values, null, 2));

            setSubmitting(false);

        }, 400);

    }

    return (<div>

        <h1>Any place in your app!</h1>

        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={userSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <ErrorMessage name="email" component="div"/>

                    <label htmlFor="friend">Which of them?</label>

                    <Field name='friend' as='select'>
                        <option value="null">All</option>
                        <option value="true">Only Followed</option>
                        <option value="false">Only Not Followed</option>

                    </Field>

                    <button type="submit" disabled={isSubmitting}>Find</button>
                </Form>

            )}

        </Formik>

    </div>)

})
