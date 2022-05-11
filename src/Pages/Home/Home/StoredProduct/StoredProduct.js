import React from 'react';
import { Link } from 'react-router-dom';

const StoredProduct = ({ product }) => {
    const { _id, image, name, description, price, quantity, supplierName } = product;
    return (
        <div className='card-container'>
            <img src={image} alt="" />
            <div className='product-details'>
                <h5>Name: {name}</h5>
                <p>{description}</p>
                <p>Price: <span style={{ color: '#ec3642' }}>${price}</span></p>
                <p>Quantity: <span style={{ color: '#ec3642' }}>{quantity}</span></p>
                <p>Supplier name: {supplierName}</p>
                <Link to={`/inventory/${_id}`}><button>Stock update</button></Link>
            </div>
        </div>
    );
};

export default StoredProduct;