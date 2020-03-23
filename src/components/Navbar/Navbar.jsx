import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <div className={style.navbar}>
        <div>
            <NavLink to="/newPhonebook" activeClassName={style.activeLink}>new phonebook</NavLink>
        </div>
        <div>
            <NavLink to="/myPhonebook" activeClassName={style.activeLink}>my phonebook</NavLink>
        </div>
        <div>
            <NavLink to="/notebook" activeClassName={style.activeLink}>notebook</NavLink>
        </div>
    </div>
}

export default Navbar;