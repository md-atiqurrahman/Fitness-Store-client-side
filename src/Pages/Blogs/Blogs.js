import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <Container style={{color: 'rgb(56, 54, 54)'}} className='my-5'>
            <PageTitle title={'Blogs'}></PageTitle>
            <div>
                <h3 style={{fontWeight: '400'}}>1.Difference between javascript and nodejs?</h3>
                <p>Ans:</p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>2.When should you use nodejs and when should you use mongodb?</h3>
                <p>Ans:</p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>3.Differences between sql and nosql databases?</h3>
                <p>Ans:</p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>4.What is the purpose of jwt and how does it work?</h3>
                <p>Ans:</p>
            </div>
        </Container>
    );
};

export default Blogs;