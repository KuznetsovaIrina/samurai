import React from 'react';
import Dialog from '../Dialog/Dialog';
import s from '../DialogsContainer/Dialogs.module.css';

const DialogList = (props) => {
  return (
    <div className={s.list}>
        <h2 className="title-small">Диалоги</h2>
        <ul>
            { props.dialogs.map(d => <Dialog key={d.id} name={d.name} avatar={d.avatar} id={d.id} />) }
        </ul>
    </div>
  );
}

export default DialogList;