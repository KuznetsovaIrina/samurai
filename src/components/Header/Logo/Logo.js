import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.logo}>
            <span className={s.circle}></span>
            <span className={s.text}>Samurai</span>
        </div>
    );
}

export default Logo;