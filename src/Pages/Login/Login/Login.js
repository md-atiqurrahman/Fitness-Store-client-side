import React, { useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';


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
   
   
    const onSubmit = async (data) => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
        const response = await axios.post('https://salty-coast-80338.herokuapp.com/getToken',{email})
        const {accessToken} = response.data;
        localStorage.setItem('accessToken',accessToken);
        reset();
        navigate(from, { replace: true });
    };

    if (loading) {
        return <Loading></Loading>
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
        <div className='login-form-container '>
            <PageTitle title={'Login'}></PageTitle>
            <h2 className='text-center mb-3'>Please Login <span style={{ color: '#ec3642' }}>!!</span></h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100'  name='email' type='email' placeholder='Enter your email' required {...register("email")} />
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