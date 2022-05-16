import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { auth } from '../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = `https://salty-coast-80338.herokuapp.com/products`;
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged === true){
                reset();
            }
        })

    }
    return (
        <div className='form-container'>
            <PageTitle title={'Add Item'}></PageTitle>
            <h3 style={{ fontWeight: '400' }} className='mb-3'>Add a New Item</h3>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100' type='text' readOnly value={user.displayName} {...register("userName")} />
                <input className='mb-3 w-100' type='email' readOnly value={user.email} {...register("email")} />
                <input className='mb-3 w-100' type='text' autoComplete='off' placeholder='Product Name' required {...register("name")} />

                <input className='mb-3 w-100' type='number' autoComplete='off' placeholder='Price' required {...register("price")} />

                <input className='mb-3 w-100' type="number" autoComplete='off' placeholder='Quantity' required {...register("quantity")} />

                <textarea className='mb-3 w-100' type="text" autoComplete='off' placeholder='Product Details' required {...register("description")} />

                <input className='mb-3 w-100' type='text' autoComplete='off' placeholder='Category' required {...register("category")} />

                <input className='mb-3 w-100' type='text' autoComplete='off' placeholder='Supplier' required {...register("supplierName")} />

                <input className='mb-3 w-100' type="text" autoComplete='off' placeholder='Sold Status' required {...register("sold")} />

                <input className='mb-3 w-100' type="number" autoComplete='off' placeholder='Product Count' required {...register("count")} />

                <input className='mb-3 w-100' type="text" value={'https://ibb.co/BB5mVxD'} readOnly {...register("image")} />

                <input className='mb-3 w-100' type="text" value={'https://ibb.co/6syvvFs'} readOnly {...register("imageBig")} />

                <input className='manage-btn mt-0 mb-5' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddItem;