import React, { useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [defaultError, setDefaultError] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    const { register, handleSubmit, reset } = useForm();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
   
   
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        reset();
    };

    if (loading) {
        return (
            <div style={{ margin: '300px 0' }} className='text-center'>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleResetPassword = async (data) =>{
       if(!data.email){
           setDefaultError('Please enter your email first.')
           return;
       }
       await sendPasswordResetEmail(data.email);
       toast('Sent Password Reset Email');
       setDefaultError('')
    }

    return (
        <div className='my-5 w-50 mx-auto'>
            <PageTitle title={'Login'}></PageTitle>
            <h2 className='text-center mb-3'>Please Login <span style={{ color: '#ec3642' }}>!!</span></h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100'  name='email' type='email' autoComplete='off' placeholder='Enter your email' required {...register("email")} />
                <input className='mb-3 w-100' type="password" placeholder='Type password' required {...register("password")} />
                <p className='text-danger'>{defaultError || error?.message}</p>
                <input className='submit-btn' type="submit" value='Login' />
            </form>
            <p className='text-center mt-4 mb-2'>New to Fitness Store ? <Link to='/register' style={{ textDecoration: 'none', color: '#0969da' }} >Please Register</Link></p>

            <p className='text-center mb-0'>Forgot Password? <button onClick={handleSubmit(handleResetPassword)} style={{ color: '#0969da' }} className=' border-0 bg-white text-decoration-none mb-1'>Reset Password</button> </p>
            <div className='horizontal-line'>
                <hr />
                <p>or</p>
                <hr />
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;