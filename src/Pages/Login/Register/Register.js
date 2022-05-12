import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [defaultError, setDefaultError] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);


    const onSubmit = async (data) => {
        const { email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            setDefaultError('Password did not matched.Please try again.')
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        toast('Sent Email Verification')
        setDefaultError('');
        reset();
    }

    if (loading) {
        return (
            <div style={{ margin: '300px 0' }} className='text-center'>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    if (user){
        navigate('/home')
    }

    return (
        <div className='my-5 w-50 mx-auto'>
            <h2 className='text-center mb-3'>Please Register <span style={{ color: '#ec3642' }}>!!</span></h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100' type='email' autoComplete='off' placeholder='Enter your email' required {...register("email")} />
                <input className='mb-3 w-100' type="password" placeholder='Type password' required {...register("password")} />
                <input className='mb-3 w-100' type="password" placeholder='Confirm password' required {...register("confirmPassword")} />
                <p className='text-danger'>{defaultError || error?.message}</p>
                <input className='submit-btn' type="submit" value='Register' />
            </form>
            <p className='text-center mt-4 mb-3'>Already have an account? <Link style={{ textDecoration: 'none', color: '#0969da' }} to='/login'>Please Login</Link></p>
            <div className='horizontal-line'>
                <hr />
                <p>or</p>
                <hr />
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;