import React from 'react';
// @ts-ignore
import {dialogs, dialogList, messages, actions} from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {createFiled, FormInput} from "../Common/FormFields/FormFields";
import {InitialStateType} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogsPage: InitialStateType
    addMessage: (message: string)=> void
}

export type DialogFormValuesTypes = {
    post: string
}

export type DialogFormValuesTypesValues = Extract<keyof DialogFormValuesTypes, string>
type OwnPropsType = {}

const Dialogs:React.FC<PropsType> = ({dialogsPage, addMessage}) => {

    const DialogsElements = dialogsPage.dialogsData.map((dialog) => <DialogItem key={dialog.id} state={dialog}/>);
    const MessagesElements = dialogsPage.messageData.map((message) => <Message key={message.id} state={message}/>);

    const onAddReplic = (values: DialogFormValuesTypes) => {
        addMessage(values.post)
    }
    const maxLength15 = maxLength(15);

    const newMessageForm:React.FC<InjectedFormProps<DialogFormValuesTypes, OwnPropsType> & OwnPropsType> =(props) => {
        return (
            <form onSubmit={props.handleSubmit} className={actions}>
                {createFiled<DialogFormValuesTypesValues>("post",'напишите сообщение',FormInput, [requiredField, maxLength15] , {type: 'text'})}
                <button type="submit" className='btn'>Написать</button>
            </form>
        )
    }

    const NewMessageReduxForm = reduxForm<DialogFormValuesTypes, OwnPropsType>({
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
