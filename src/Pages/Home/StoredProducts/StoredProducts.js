import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStoredProducts from '../../../hooks/useStoredProducts';
import StoredProduct from '../Home/StoredProduct/StoredProduct';
import './StoredProducts.css';

const StoredProducts = () => {
    const [storedProducts, setStoredProducts] = useStoredProducts();

    const selectedProducts = storedProducts.filter(product => product.price < 800)

    return (
        <div className='stored-products text-center'>
            <p className='sub-title'>EXPLORE</p>
            <h1 className='title'>Our Inventory Items</h1>
            <div className='horizontal-line d-flex justify-content-center align-items-stretch '>
                <hr />
                <p className='hr-text mx-2'>X</p>
                <hr />
            </div>
            <div className='products-container '>
                {
                    selectedProducts.map(product => <StoredProduct
                                key={product._id}
                                product={product}
                            ></StoredProduct>
                    )
                }
            </div>
            <Link to='/manage'><button className='manage-btn'> Manage Inventories</button></Link>
        </div>
    );
};

export default StoredProducts;