import React from 'react';
import s from './Dialogs.module.css';
import AddMessage from '../AddMessage/AddMessage';
import DialogList from './../DialogList/DialogList';
import MessageList from './../MessageList/MessageList';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import StoreContext from './../../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
          const state = store.getState().dialogsPage;
    
          const addMessage = (newMessage) => {
            store.dispatch(addMessageActionCreator(newMessage));
          };
        
          const updateNewMessageText = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text))
          };

          return (
            <div className={`content-dialogs ${s.dialogs}`}>
              <DialogList dialogs={state.dialogs}  />

              <div className={s.chat}>
                <MessageList messages={state.messages} />
                <AddMessage newMessageText={state.newMessageText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}  />
              </div>
            </div>
          );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;