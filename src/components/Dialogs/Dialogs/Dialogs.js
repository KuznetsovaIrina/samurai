import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './../DialogList/DialogList';
import MessageList from './../MessageList/MessageList';
import AddMessageForm from './../AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.addMessage({
            type: 'to',
            text: formData.text,
            name: 'Ира',
            avatar: 'https://avatars.mds.yandex.net/i?id=61cabaa529af9c22f1217a68d0cfcc37-5332625-images-thumbs&n=13'
        });
    }

    return (
        <div className={`content-dialogs ${s.dialogs}`}>
            <DialogList dialogs={props.dialogs}  />

            <div className={s.chat}>
                <MessageList messages={props.messages} />
                <AddMessageForm onSubmit={onSubmit}  />
            </div>
        </div>
    );
}

export default Dialogs;