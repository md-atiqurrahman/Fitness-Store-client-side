import React from 'react';
import './SocialLogin.css';
import google from '../../../images/Social/google.png';

const SocialLogin = () => {
    return (
        <div className='social-login d-flex justify-content-center align-items-center'>
            <img src={google} alt="" />
            <span className='signin-text'>Sign-in With Google</span>
        </div>
    );
};

export default SocialLogin;