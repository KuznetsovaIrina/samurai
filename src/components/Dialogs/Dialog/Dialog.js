import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../DialogsContainer/Dialogs.module.css';

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li>
      <NavLink className={navData => navData.isActive ? s.active : ''} to={path}>
        <img width="35" src={props.avatar} alt={props.name} />
        <span className={s.name}>{props.name}</span>
      </NavLink>
    </li>
  );
};

export default Dialog;