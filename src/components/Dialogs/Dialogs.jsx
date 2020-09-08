import React from 'react';
import {dialogs, dialogList, messages, actions} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {FormInput} from "../Common/FormFields/FormFields";



const Dialogs = ({dialogsPage, addMessageActionCreator}) => {

    const DialogsElements = dialogsPage.dialogsData.map((dialog) => <DialogItem key={dialog.id} state={dialog}/>);
    const MessagesElements = dialogsPage.messageData.map((message) => <Message key={message.id} state={message}/>);



    const onAddReplic = (values) => {
        addMessageActionCreator(values.post)
    }
    const maxLength15 = maxLength(15);

    const newMessageForm =(props) => {
        return (
            <form onSubmit={props.handleSubmit} className={actions}>
                <Field name="post"
                       component={FormInput}
                       type="textarea"
                       validate={[requiredField, maxLength15]}/>
                <button type="submit" className='btn'>Написать</button>
            </form>
        )
    }

    const NewMessageReduxForm = reduxForm({
        form: 'newMessage'
    })(newMessageForm);


    return (
        <div className={dialogs}>
            <ul className={dialogList}>
                {DialogsElements}
            </ul>
            <ul className={messages}>
                {MessagesElements}
            </ul>
            <NewMessageReduxForm onSubmit={onAddReplic}/>
        </div>

    )
}

export default Dialogs;