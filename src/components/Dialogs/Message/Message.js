import React from 'react';
import s from '../DialogsContainer/Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={`${s.message} ${props.type === 'to' ? s.to : s.in}`}>
      <div className={s.info}>
        <img width="30" src={props.avatar} alt={props.name} />
      </div>
      <div className={s.text}>{props.text}</div>
    </div>
  );
};

export default Message;