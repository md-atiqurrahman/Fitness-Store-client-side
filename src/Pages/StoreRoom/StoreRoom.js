import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import PageTitle from '../Shared/PageTitle/PageTitle';

const StoreRoom = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => {
                const product = data.map(item => {
                    const name = item.name;
                    const quantity = parseInt(item.quantity);
                    const newItem = {
                        name: name,
                       Quantity: quantity
                    }
                    return newItem;
                })
                setStoredProducts(product);
            })
    }, [])
    return (
        <div className='my-5'>
            <PageTitle title={'Store Room'}></PageTitle>
            <div className='w-75 mx-auto'>
                <BarChart className='w-90 mx-auto text-center' width={800} height={400} data={storedProducts}>
                    <Bar dataKey={'Quantity'} fill="#8884d8" />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>
            </div>
        </div>
    );
};

export default StoreRoom;