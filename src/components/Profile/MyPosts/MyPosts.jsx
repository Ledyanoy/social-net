import React from 'react';
import Post from './Post/Post'
import {postList, postForm} from './MyPosts.module.css'
import {Field, reduxForm} from 'redux-form';
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {FormInput} from "../../Common/FormFields/FormFields";


const MyPosts = ({postsData, addPostActionCreator}) => {

    const Posts = postsData.map(({message, likesCount, id}) => <Post message={message} key={id} likesCount={likesCount}/>)


    const onAddPost =(values) => {
        addPostActionCreator(values.post);
    }


    return (
        <div>
            <h3>My Posts</h3>
            <NewPostReduxForm onSubmit={onAddPost}/>
            <ul className={postList}>
                {Posts}
            </ul>
        </div>
    )
}

const maxLength10 = maxLength(10);

const newPostForm =(props) => {

    return (
        <form onSubmit={props.handleSubmit} className={postForm}>
            <Field name="post" component={FormInput} type="textarea"
                   validate={[requiredField, maxLength10]}
            />
            <div><button type="submit" className='btn'>Добавить пост</button></div>
        </form>
    )
}

let NewPostReduxForm = reduxForm({
    form: 'newPost'
})(newPostForm);

export default MyPosts;