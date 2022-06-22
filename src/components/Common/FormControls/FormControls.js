import React from 'react';
import s from './FormControls.module.css';

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.box + " " + (hasError ? s.error: '')}>
            {props.type === 'checkbox' ? <input {...input} {...props} /> : <Element {...input} {...props} /> }
            {hasError ? <span className={s.error}>{meta.error}</span> : ''}
        </div>
    )  
}

export const Textarea = Element('textarea');
export const Input = Element('input');
export const Checkbox = Element('checkbox');