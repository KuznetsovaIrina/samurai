import React from 'react';
import Logo from '../Logo/Logo';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
          <div className={s.wrap}>
            <Logo />
          </div>
        </header>
    );
}

export default Header;