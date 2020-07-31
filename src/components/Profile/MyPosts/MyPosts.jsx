import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'
import {Field, reduxForm} from 'redux-form';


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

const newPostForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="post" component="textarea" type="textarea"/>
            <div><button type="submit">Добавить</button></div>
        </form>
    )
}

let NewPostReduxForm = reduxForm({
    form: 'newPost'
})(newPostForm);

export default MyPosts;