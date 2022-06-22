import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../Common/FormControls/FormControls';
import {requiredField} from './../../utils/validators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from './../../redux/auth-reducer';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <Field validate={[requiredField]} placeholder='email' name="email" type="text" component={Input} />
            <Field validate={[requiredField]} placeholder='password' name="password" type="password" component={Input} />
            <label className='checkbox'>
                 <Field name="rememberMe" type="checkbox" component={Checkbox} />
                <span>Remember me</span>
            </label>
            {error && <div className='errors'>{error}</div>}
            <button type="submit" className='button'>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, userId}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Navigate  to={"/profile/" + userId} />
    }

    return (
        <div className='content-paddings'>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {login})(Login);