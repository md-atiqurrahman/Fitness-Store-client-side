import React from 'react';

const ItemDetails = ({ product, setStoredProducts, storedProducts }) => {
    const { _id, count,  quantity, name } = product;

    const handleDelete = id => {
        const url = `https://salty-coast-80338.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const remainingProducts = storedProducts.filter(product => product._id !== id)
                    setStoredProducts(remainingProducts)
                }
            })
    }

    return (
        <tr className='tr'>
            <td>{count}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td className='tr' style={{ backgroundColor: '#efefef' }}>
                <button className='btn' onClick={() => handleDelete(_id)} style={{ width: '100%', border: 'none', backgroundColor: 'white' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ItemDetails;