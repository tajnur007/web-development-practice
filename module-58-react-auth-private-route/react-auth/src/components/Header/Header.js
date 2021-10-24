import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="header">
            <NavLink exact to="/">Home </NavLink>
            <NavLink exact to="/login">Login </NavLink>
            <NavLink exact to="/register">Register </NavLink>
            <span>{user.displayName} </span>
            {user.displayName && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Header;