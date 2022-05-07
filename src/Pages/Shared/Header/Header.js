import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
                <Navbar.Brand href="#home"> <span className='store-name'>Fitness Store</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto d-lg-flex">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                    </div>
                    <div className='d-lg-flex'>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;