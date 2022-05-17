import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import { auth } from '../../firebase.init';
import Item from '../Item/Item';
import './MyItem.css';

const MyItem = () => {
    const [myAddedItem, setMyAddedItem] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        const url = `https://salty-coast-80338.herokuapp.com/addedProduct?email=${email}`;

        const getItem = async () => {
            try {
                const { data } = await axiosPrivate.get(url)
                setMyAddedItem(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItem()

    }, [user])

    return (
        <>
            {
                myAddedItem.map(item => <Item
                    key={item._id}
                    product={item}
                    setMyAddedItem={setMyAddedItem}
                    myAddedItem={myAddedItem}
                >
                </Item>)
            }
        </>
    );
};

export default MyItem;