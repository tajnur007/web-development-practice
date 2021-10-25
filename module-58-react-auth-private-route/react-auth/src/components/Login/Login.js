import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { useGoogleAuth, errorMsg, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginClick = () => {
        login(email, password);
    }

    return (
        <div>
            <h2>Please Login with your email and password</h2>
            <input onChange={handleEmail} type="text" placeholder="Put your email here" />
            <br />
            <input onChange={handlePassword} type="password" placeholder="Put your password here" />
            <br />
            <button onClick={handleLoginClick}>Login</button>
            <br />
            <button onClick={useGoogleAuth}>Login with Google</button>
            <br />
            <p style={{ color: "red" }}>{errorMsg}</p>
            <br />
            <Link to="/register">Create an account</Link>

        </div>
    );
};

export default Login;