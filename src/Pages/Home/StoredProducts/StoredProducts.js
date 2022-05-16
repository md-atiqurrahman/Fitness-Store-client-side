import React from 'react';
import { Link } from 'react-router-dom';
import useLoading from '../../../hooks/useLoading';
import useStoredProducts from '../../../hooks/useStoredProducts';
import Loading from '../../Shared/Loading/Loading';
import StoredProduct from '../Home/StoredProduct/StoredProduct';
import './StoredProducts.css';

const StoredProducts = () => {
    const [storedProducts] = useStoredProducts();
    const [loading] = useLoading(storedProducts);

    const size = 6;
    const selectedProducts = storedProducts.slice(0, size).map(product => {
        return product;
    })

    return loading ?
        (
            <Loading></Loading>
        ) :
        (
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