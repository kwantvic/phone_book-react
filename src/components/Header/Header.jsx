import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <div className={style.header}>
        <div><img src="./logoHeader.png" alt="logo"/></div>
        <p>MY REACT-PHONEBOOK</p>
    </div>
}

export default Header;