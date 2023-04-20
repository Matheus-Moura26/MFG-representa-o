import React from 'react';
import  "./index.css";
import { Link } from 'react-router-dom';

function LoginButton( ) {
    return (


        <Link to="/login" className='loginContent'>
            <p className='loginText'>Login</p>
        </Link>
    );
}

export default LoginButton;