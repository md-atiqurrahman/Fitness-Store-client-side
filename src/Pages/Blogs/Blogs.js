import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <Container style={{color: 'rgb(56, 54, 54)'}} className='my-5'>
            <PageTitle title={'Blogs'}></PageTitle>
            <div>
                <h3 style={{fontWeight: '400'}}>1.Difference between javascript and nodejs?</h3>
                <p>Ans: Javascript is a programming language but NodeJS is a javascript runtime environment which allows javascript code run outside the browser.Javascript used in client-side but NodeJs used in server-side.NodeJs can not add HTML tags but Javascript is capable enough to add HTML tags.RamdaJS , TypedJS e.t.c are javascript frameworks and express,Lodash e.t.c are some of the Node modules.JavaScript is the upgraded version of ECMA script which uses Chrome V8 engine written  in C++ and NodeJS is written is C, C++ and Javascript. </p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>2.When should you use nodejs and when should you use mongodb?</h3>
                <p>Ans: NodeJS is a javascript runtime environment which is capable enough to connect with both SQL and NoSQL database such as MySQL and MongoDB.Connect with these database for storing data you need to use NodeJS in server-side.On the other hand MongoDB is a  high-performance ,open-source,scalable ,document-oriented NoSQL database.MongoDB is written is C++.When you need to use simple queries ,easy and fast integration of data which structure is changes constantly with time you should need to use MongoDB database.</p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>3.Differences between sql and nosql databases?</h3>
                <p>Ans: SQL is relational database management system but NoSQL is a non-relational database.SQL database have predefined schema but NoSQL database have dynamic schema.SQL databases are not perfect for hierarchical data storage but NoSQL databases are best suited for hierarchical data storage.SQL databases are perfect for complex queries but NoSQL databases are not best suited for complex queries.SQL databases are vertically scalable but NoSQL databases are horizontally scalable.</p>
            </div>
            <div>
                <h3 style={{fontWeight: '400'}}>4.What is the purpose of jwt and how does it work?</h3>
                <p>Ans: A JSON Web Token (JWT) is a JSON object which is mainly composed in header,payload and signature.These parts are separated by dots.JWT is used for securely transfer information between two parties over the web.For authentication system and information exchange it can be used.JWT contain a set of claims.A claim may assert who issued the token,how long it is valid for or what permissions the client has been granted.The header parts of JWT contains signing algorithm.The payload parts of JWT contains the claims which is used by the server to verify that the user have permission  to perform the action they are requesting.The signature parts of JWT ensures that the token hasn't been altered.</p>
            </div>
        </Container>
    );
};

export default Blogs;