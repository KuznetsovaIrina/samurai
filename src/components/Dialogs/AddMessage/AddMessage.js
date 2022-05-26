import React from 'react';
import s from '../DialogsContainer/Dialogs.module.css';

const AddMessage = (props) => {
  const onClickAddButton = () => {
    props.addMessage({
      type: 'to',
      text: props.newMessageText,
      name: 'Ира',
      avatar: 'https://avatars.mds.yandex.net/i?id=61cabaa529af9c22f1217a68d0cfcc37-5332625-images-thumbs&n=13'
    });
  };

  const onChangeText = (evt) => {
    props.updateNewMessageText(evt.target.value);
  };

  return (
    <form className={s.form}>
        <textarea placeholder='Текст сообщения' value={props.newMessageText} onChange={onChangeText} />
        <button onClick={onClickAddButton} type="button">Добавить</button>
    </form>
  );
}

export default AddMessage;