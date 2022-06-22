import React from 'react';
import Post from '../Post/Post';
import s from './PostsList.module.css';

// PureComponent

const PostsList = React.memo(props => {
  return (
    <div>
      <h2 className='title title-middle'>Мои заметки</h2>
      <ul className={s.items}>
        { props.posts.map(p => <Post key={p.id} text={p.text} image={p.image} />) }
      </ul>
    </div>
  )
});

export default PostsList;