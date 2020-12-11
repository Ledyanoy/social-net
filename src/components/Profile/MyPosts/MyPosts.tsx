import React from 'react';
import Post from './Post/Post'
// @ts-ignore
import {postList, postForm} from './MyPosts.module.css'
import { InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {createFiled, FormInput, GetStringKeys} from "../../Common/FormFields/FormFields";
import {PostType} from "../../../types/types";


export type MapPropsType = {
    postsData: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (post: string)=> void
}

type NewPostType = {
    post: string
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = ({postsData, addPost}) => {

    const Posts = postsData.map(({message, likesCount, id}) => <Post message={message} key={id} likesCount={likesCount}/>)


    const onAddPost =(values:NewPostType) => {
        addPost(values.post);
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

type OwnPropsType = {}

export type AddPostFormValuesTypesKeys = GetStringKeys<NewPostType>

const newPostForm: React.FC<InjectedFormProps<NewPostType, OwnPropsType> & OwnPropsType>  =(props) => {

    return (
        <form onSubmit={props.handleSubmit} className={postForm}>
            {createFiled<AddPostFormValuesTypesKeys>("post",'напиши пост',FormInput, [requiredField, maxLength10] , {type: 'text'})}

            <div><button type="submit" className='btn'>Добавить пост</button></div>
        </form>
    )
}

let NewPostReduxForm = reduxForm<NewPostType, OwnPropsType>({
    form: 'newPost'
})(newPostForm);

export default MyPosts;
