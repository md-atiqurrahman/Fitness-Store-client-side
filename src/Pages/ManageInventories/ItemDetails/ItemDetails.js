import React from 'react';

const ItemDetails = ({ product, setStoredProducts, storedProducts }) => {
    const { _id, count, price, quantity, name, category, sold } = product;

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
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
        <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            {/* <td>{sold}</td>
            <td>{category}</td> */}
            <td style={{ backgroundColor: '#efefef' }}>
                <button onClick={() => handleDelete(_id)} style={{ width: '100%', border: 'none', backgroundColor: 'white' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ItemDetails;