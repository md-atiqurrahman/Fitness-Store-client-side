import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Item from '../Item/Item';
import './MyItem.css';

const MyItem = () => {
    const [myAddedItem, setMyAddedItem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        const url = `https://salty-coast-80338.herokuapp.com/addedProduct?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAddedItem(data))
    }, [user])

    return (
        <>
            {
                myAddedItem.map(item => <Item
                    key={item._id}
                    product={item}
                    setMyAddedItem ={setMyAddedItem}
                    myAddedItem={myAddedItem}
                >
                </Item>)
            }
        </>
    );
};

export default MyItem;