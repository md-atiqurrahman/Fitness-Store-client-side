import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='my-5 w-50 mx-auto'>
            <h2 className='text-center mb-3'>Please Register <span style={{ color: '#ec3642' }}>!!</span></h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100' type='text' autoComplete='off' placeholder='your name' {...register("name")} />
                <input className='mb-3 w-100' type='email' autoComplete='off' placeholder='enter your email' {...register("email")} />
                <input className='mb-3 w-100' type="password" placeholder='type password' {...register("password")} />
                <input className='mb-3 w-100' type="password" placeholder='re-type password' {...register("password")} />
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