import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import StoredProducts from '../StoredProducts/StoredProducts';
import Suppliers from '../Suppliers/Suppliers';
import NewProducts from './NewProducts/NewProducts';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 55);
    }, []);

    return loading ?
        (
            <Loading></Loading>
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
            </div>
        )
};

export default Home;