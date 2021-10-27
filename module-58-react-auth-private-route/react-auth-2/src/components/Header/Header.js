import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/users">
                Users
            </NavLink>
            <NavLink to="/posts">
                Posts
            </NavLink>
            <NavLink to="/album">
                Album
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
        </div>
    );
};

export default Header;