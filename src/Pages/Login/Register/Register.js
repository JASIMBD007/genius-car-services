import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    };

    if (updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Your Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2  text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms & Conditions</label> */}

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms & Conditions</label>

                <input disabled={!agree} className='w-50 d-block btn btn-primary mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account ? <Link to='/login' className='text-primary pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;