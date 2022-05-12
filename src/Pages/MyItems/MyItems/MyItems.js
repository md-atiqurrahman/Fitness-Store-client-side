import React from 'react';
import { Container, Table } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    return (
        <div>
            <PageTitle title={'My Items'}></PageTitle>
            <Container className='my-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Remove Item</th>
                        </tr>
                    </thead>
                    <tbody>
                       <MyItem></MyItem>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyItems;