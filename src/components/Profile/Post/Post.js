import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.item}>
            <div className={s.image}>
                <img src={props.image} alt="" />
            </div>
            <div className={s.text}>
                { props.text }
            </div>
        </li>
    );
}

export default Post;