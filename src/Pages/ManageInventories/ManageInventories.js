import React from 'react';
import { Container,  Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import useStoredProducts from '../../hooks/useStoredProducts';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import ItemDetails from './ItemDetails/ItemDetails';

const ManageInventories = () => {
    const [storedProducts, setStoredProducts] = useStoredProducts();
    const [loading] = useLoading(storedProducts);


    return loading ?
        (
            <Loading></Loading>
        ) :
        (
            <div>
                <PageTitle title={'Manage Items'}></PageTitle>
                <Container className=' w-90 my-5'>
                    <Table className='table' striped bordered hover>
                        <thead>
                            <tr>
                                <th>SL no.</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                storedProducts.map(product => <ItemDetails
                                    key={product._id}
                                    product={product}
                                    setStoredProducts = {setStoredProducts}
                                    storedProducts = {storedProducts}
                                >
                                </ItemDetails>)
                            }
                        </tbody>
                    </Table>
                    <div className='text-center mt-5 mb-5'>
                        <Link to='/addItem'>
                            <button className='manage-btn mt-2 mb-3' >
                                Add New Item
                            </button>
                        </Link>
                    </div>
                </Container>
            </div>
        );
};

export default ManageInventories;