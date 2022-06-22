import React from 'react';
import Logo from '../Logo/Logo';
import s from './Header.module.css';
import UserPanel from './UserPanel';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <Logo />
        
        <UserPanel
          isAuth={props.isAuth}
          userId={props.userId}
          login={props.login}
          logout={props.logout}
        />
      </div>
    </header>
  );
}

export default Header;