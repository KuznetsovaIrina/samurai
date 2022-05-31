import React from 'react';
import Message from '../Message/Message';
import s from './../Dialogs/Dialogs.module.css';

const MessageList = (props) => {
  return (
    <div className={s.messages}>
        { props.messages.map(m => <Message key={m.id} type={m.type} text={m.text} name={m.name} avatar={m.avatar} />) }
    </div>
  );
}

export default MessageList;