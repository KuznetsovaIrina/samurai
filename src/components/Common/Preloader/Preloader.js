import React from 'react';
import s from './Preloader.module.css';
import loaderImage from './../../../assets/images/loader.gif'

const Preloader = (props) => {
    return (
        <img className={s.image} src={loaderImage} alt="loading" />
    )
}

export default Preloader;