import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
                <Navbar.Brand href="#home"> <span className='store-name'>Fitness Store</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto d-lg-flex">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link href="#pricing">BLOGS</Nav.Link>
                    </div>
                    <div className='d-lg-flex'>
                        <Nav.Link href="#deets">ABOUT</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/login">
                            LOGIN
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;