import React from 'react';

const AddPost = (props) => {
  const onClickAddButton = () => {
    props.addPost({
      text: props.newPostText,
      image: ''
    });
  };

  const onChangeText = (evt) => {
    props.updateNewPostText(evt.target.value);
  };

  return (
    <form className='form'>
      <textarea placeholder='Новая заметка' value={props.newPostText} onChange={onChangeText} />
      <button onClick={onClickAddButton} type="button" className='button'>Добавить</button>
    </form>
  );
}

export default AddPost;