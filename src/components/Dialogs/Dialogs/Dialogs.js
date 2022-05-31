import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './../DialogList/DialogList';
import MessageList from './../MessageList/MessageList';
import AddMessage from './../AddMessage/AddMessage';

const Dialogs = (props) => {
    return (
        <div className={`content-dialogs ${s.dialogs}`}>
            <DialogList dialogs={props.dialogs}  />

            <div className={s.chat}>
                <MessageList messages={props.messages} />
                <AddMessage newMessageText={props.newMessageText} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}  />
            </div>
        </div>
    );
}

export default Dialogs;