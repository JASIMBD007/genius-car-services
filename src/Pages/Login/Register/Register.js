import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    };

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="" id="" placeholder='Your Name' />
                <input type="email" name="" id="" placeholder='Your Email' required />
                <input type="password" name="" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;