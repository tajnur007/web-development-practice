import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please create an account</h2>
            <input type="text" placeholder="What is your email?" />
            <br />
            <input type="text" placeholder="Give a password" />
            <br />
            <button>Register</button>
            <br />
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;