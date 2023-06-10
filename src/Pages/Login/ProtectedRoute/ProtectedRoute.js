import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }
    console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger'>You Email Address Is Not Verified!</h3>
            <h5 className='text-success'>Verify Your Email!</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent email');
                    }
                }}
            >
                Send Verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default ProtectedRoute;