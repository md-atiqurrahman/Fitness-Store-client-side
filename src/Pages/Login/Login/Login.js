import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const { register, handleSubmit ,reset } = useForm();


    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data =>{
        const {email,password} = data;
        signInWithEmailAndPassword(email,password);
        reset();
    };


    if(user){
        navigate(from, { replace: true }); 
    }

    return (
        <div className='my-5 w-50 mx-auto'>
            <PageTitle title={'Login'}></PageTitle>
            <h2 className='text-center mb-3'>Please Login <span style={{ color: '#ec3642' }}>!!</span></h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100' type='email' autoComplete='off' placeholder='Enter your email' required {...register("email")} />
                <input className='mb-3 w-100' type="password" placeholder='Type password' required {...register("password")} />
                <p className='text-danger'>{error?.message}</p>
                <input className='submit-btn' type="submit" value='Login' />
            </form>
            <p className='text-center mt-4 mb-2'>New to Fitness Store ? <Link style={{ textDecoration: 'none', color: '#0969da' }} to='/register'>Please Register</Link></p>

            <p className='text-center mb-0'>Forgot Password? <button style={{ color: '#0969da' }} className='btn btn-link text-decoration-none mb-1'>Reset Password</button> </p>
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