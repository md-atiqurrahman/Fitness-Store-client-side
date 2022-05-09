import React from 'react';

const StoredProduct = ({product}) => {
    const {image,name,description,price,quantity,supplierName} = product;
    return (
        <div className='card-container'>
            <img src={image} alt="" />
            <div className='product-details'>
                <h5>Name: {name}</h5>
                <p>{description}</p>
                <p>Price: <span style={{ color: '#ec3642' }}>${price}</span></p>
                <p>Quantity: <span style={{ color: '#ec3642' }}>{quantity}</span></p>
                <p>Supplier name: {supplierName}</p>
                <button>Stock update</button>
            </div>
        </div>
    );
};

export default StoredProduct;