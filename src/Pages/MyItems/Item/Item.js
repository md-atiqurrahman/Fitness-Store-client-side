import React from 'react';

const Item = ({ product, setMyAddedItem, myAddedItem }) => {
    const { _id, count, name, quantity } = product;

    const handleDelete = id => {

        const url = `http://localhost:5000/addingItem/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const remainingItem = myAddedItem.filter(item => item._id !== id);
                    setMyAddedItem(remainingItem);
                }

            })
    }

    return (
        <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td style={{ backgroundColor: '#efefef' }}>
                <button onClick={() => handleDelete(_id)} style={{ width: '100%', border: 'none', backgroundColor: 'white' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Item;