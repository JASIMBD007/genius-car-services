import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement = '';

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'> <img style={{ width: "30px " }} src={google} alt="" srcset="" /> <span className='px-2'>Sign In With Google </span> </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'> <img style={{ width: "30px " }} src={facebook} alt="" srcset="" /> <span className='px-2'>Sign In With Facebook </span> </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'> <img style={{ width: "30px " }} src={github} alt="" srcset="" /> <span className='px-2'>Sign In With Github </span> </button>
            </div>
        </div>
    );
};

export default SocialLogin;