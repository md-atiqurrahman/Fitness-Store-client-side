import React, { useEffect, useState } from 'react';
import StoredProduct from '../Home/StoredProduct/StoredProduct';
import './StoredProducts.css';

const StoredProducts = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setStoredProducts(data))
    }, [])

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
        </div>
    );
};

export default StoredProducts;