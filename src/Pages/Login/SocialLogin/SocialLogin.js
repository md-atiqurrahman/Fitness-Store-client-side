import React from 'react';
import './SocialLogin.css';
import google from '../../../images/Social/google.png';
import { auth } from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSocialSignIn = () =>{
        signInWithGoogle();
    }
    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div onClick={handleSocialSignIn} className='social-login d-flex justify-content-center align-items-center'>
            <img src={google} alt="" />
            <span className='signin-text'>Sign-in With Google</span>
        </div>
    );
};

export default SocialLogin;