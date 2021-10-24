import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form action="">
                <h2>Please Login with your email and password</h2>
                <input type="text" placeholder="Put your email here" />
                <br />
                <input type="password" placeholder="Put your password here" />
                <br />
                <button>Login</button>
                <br />
                <Link path="/register">Create an account</Link>

            </form>
        </div>
    );
};

export default Login;