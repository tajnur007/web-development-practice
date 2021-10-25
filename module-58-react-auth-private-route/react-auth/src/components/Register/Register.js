import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createAccount, errorMsg } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        createAccount(email, password);
    }

    return (
        <div>
            <h2>Please create an account</h2>
            <input onChange={handleEmail} type="text" placeholder="What is your email?" />
            <br />
            <input onChange={handlePassword} type="text" placeholder="Give a password" />
            <br />
            <button onClick={handleRegister}>Register</button>
            <br />
            <p style={{ color: "red" }}>{errorMsg}</p>
            <br />
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;