import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { useGoogleAuth, errorMsg } = useFirebase();

    return (
        <div>
            <h2>Please Login with your email and password</h2>
            <input type="text" placeholder="Put your email here" />
            <br />
            <input type="password" placeholder="Put your password here" />
            <br />
            <button>Login</button>
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