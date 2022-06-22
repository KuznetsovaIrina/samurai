import React from 'react';
import s from './../Dialogs/Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../../Common/FormControls/FormControls';
import {requiredField, maxLengthCreator} from './../../../utils/validators';

const maxLength = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
        <Field validate={[requiredField, maxLength]} placeholder='Новое сообщение' name="text" component={Textarea} />
        <button>Добавить</button>
    </form>
  );
}

export default reduxForm({form: 'newMessage'})(AddMessageForm);