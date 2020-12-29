import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/selectors";

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendFormType = 'true' | 'false' | 'null';
type FromValuesType = {
    term: string,
    friend: FriendFormType
}

export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {
    const filter = useSelector(getUsersFilter)

    const submit = (values: FromValuesType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const convertedValues: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(convertedValues);

        setTimeout(() => {

            // alert(JSON.stringify(values, null, 2));

            setSubmitting(false);

        }, 400);

    }

    return (<div>

        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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
