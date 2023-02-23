import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useLoading from '../../hooks/useLoading';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './StoreRoom.css';

const StoreRoom = () => {
    const [storedProducts, setStoredProducts] = useState([]);

    const [loading] = useLoading(storedProducts);


    useEffect(() => {
        fetch('https://gym-equipment-server-side.up.railway.app/products')
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
    return loading ?
        (
            <Loading></Loading>
        )
        :
        (
            <div className='my-5'>
                <PageTitle title={'Store Room'}></PageTitle>
                <Container className='chart-container'>
                    <ResponsiveContainer className='responsive-container' width="95%" height={400}>
                        <BarChart className="barChart" data={storedProducts}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey={'Quantity'} fill="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Product Name" barSize={10} fill="#666666" />
                        </BarChart>
                    </ResponsiveContainer>
                </Container>
            </div>
        );
};

export default StoreRoom;