import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'> <span className='store-name'>Fitness Store</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto d-lg-flex">
                        <CustomLink as={Link} to="/home">Home</CustomLink>
                        <CustomLink as={Link} to="/blogs">Blogs</CustomLink>
                    </div>
                    <div className='d-lg-flex'>
                        <CustomLink as={Link} to="/storeRoom">Store Room</CustomLink>
                        {
                            user ?
                                <>
                                    <CustomLink as={Link} to="/manage">
                                        Manage Items
                                    </CustomLink>
                                    <CustomLink as={Link} to="/addItem">
                                        Add Item
                                    </CustomLink>
                                    <CustomLink as={Link} to="/myItems">
                                        My Items
                                    </CustomLink>
                                </>
                                :
                                ''
                        }
                        {
                            user ?
                                <CustomLink as={Link} to='/login'>
                                    <div
                                        onClick={logout}
                                    >
                                        Logout
                                    </div>
                                </CustomLink>
                                :
                                <CustomLink as={Link} to='/login'>
                                    <div>
                                        Login
                                    </div>
                                </CustomLink>
                        }



                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;