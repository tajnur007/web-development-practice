import React, { useEffect } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className="header">
            <NavLink exact to="/">Home </NavLink>
            <NavLink exact to="/login">Login </NavLink>
            <NavLink exact to="/register">Register </NavLink>
            <span>{user.displayName} </span>
            <button>Logout</button>
        </div>
    );
};

export default Header;