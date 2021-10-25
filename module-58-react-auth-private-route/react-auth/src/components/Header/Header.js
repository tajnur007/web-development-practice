import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <NavLink exact to="/">Home </NavLink>
            <NavLink exact to="/userDetails">User Details </NavLink>
            <NavLink exact to="/login">Login </NavLink>
            <NavLink exact to="/register">Register </NavLink>
            <span>{user.displayName} </span>
            {user.email && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Header;