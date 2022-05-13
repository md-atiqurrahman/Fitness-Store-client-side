import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useStoredProducts from '../../../hooks/useStoredProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import StoredProducts from '../StoredProducts/StoredProducts';
import Suppliers from '../Suppliers/Suppliers';
import NewProducts from './NewProducts/NewProducts';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    const [storedProducts] = useStoredProducts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, [storedProducts]);

    return loading ?
        (
            <div style={{ margin: '300px 0' }} className='text-center'>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
        :
        (
            <div>
                <PageTitle title={'Home'}></PageTitle >
                <Banner></Banner>
                <StoredProducts></StoredProducts>
                <NewProducts></NewProducts>
                <Suppliers></Suppliers>
                <Subscribe></Subscribe>
            </div >
        )
};

export default Home;