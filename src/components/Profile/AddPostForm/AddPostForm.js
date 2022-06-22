import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLengthCreator} from './../../../utils/validators';
import { Textarea } from '../../Common/FormControls/FormControls';

const maxLength = maxLengthCreator(300);

const AddPostForm = (props) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <Field validate={[requiredField, maxLength]} placeholder='Новая заметка' name="text" component={Textarea} />
      <button className='button'>Добавить</button>
    </form>
  );
}



export default reduxForm({form: 'post'})(AddPostForm)