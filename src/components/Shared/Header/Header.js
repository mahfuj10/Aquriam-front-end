import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top" style={{ height: '50px' }}>
                <Container>
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Navbar.Brand className="fw-bold text-decoration-none">Aqorizz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-primary bg-primary" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu-item">
                            <Link to="/home" className="item">Home</Link>
                            <Link to="/about" className="item">About</Link>
                            <Link to="/contact" className="item">Contact</Link>
                        </Nav>
                        {/* {
                            user?.email ?
                                <>
                                    <Nav className="menu-item">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </Nav>
                                    <div className="d-flex me-3 user">
                                        {user?.photoURL && <img className="img-fluid user-img mt-2" src={user?.photoURL} alt="userimage" />}
                                        <p className="pt-3 ps-2 text-warning">{user?.displayName}</p>
                                    </div>
                                    <Button variant="warning" onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i> Logout</Button>
                                </>
                                :
                                <Link to="/login">
                                    <Button variant="warning"><i className="fas fa-sign-in-alt me-1"></i> Login</Button>
                                </Link>
                        } */}
                        <Link to="/login">
                            <Button variant="warning"><i className="fas fa-sign-in-alt me-1"></i> Login</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;