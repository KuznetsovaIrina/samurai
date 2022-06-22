import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const UserPanel = (props) => {
  return (
    <div className={s.userPanel}>
        { props.isAuth
        ?
        <div className={s.userInfo}>
            <NavLink to={`profile/${props.userId}`}>{props.login}</NavLink>
            <button className={s.logout} onClick={props.logout}>(Logout)</button>
        </div>
        :
        <NavLink to="/login">Login</NavLink> }
    </div>
  );
}

export default UserPanel;