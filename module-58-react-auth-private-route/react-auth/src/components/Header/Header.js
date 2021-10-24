import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/">Home </NavLink>
            <NavLink exact to="/login">Login </NavLink>
            <NavLink exact to="/register">Register </NavLink>
        </div>
    );
};

export default Header;