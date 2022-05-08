import React from 'react';
import Banner from '../Banner/Banner';
import StoredProducts from '../StoredProducts/StoredProducts';
import Suppliers from '../Suppliers/Suppliers';
import NewProducts from './NewProducts/NewProducts';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StoredProducts></StoredProducts>
            <NewProducts></NewProducts>
            <Suppliers></Suppliers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;