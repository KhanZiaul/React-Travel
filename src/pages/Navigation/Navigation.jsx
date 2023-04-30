import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Navigation.css'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container >
                <Link to="/">
                    <img className='navLogo light' src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div>
                            <input type="text" placeholder='Search your Destination...' className='px-5 py-2 rounded mx-2 border-light opacity-75' />
                            <FaSearch />
                        </div>
                        <Nav.Link className='mx-2 fw-bold text-light' href="#home">News</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold text-light' href="#link">Destination</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold text-light' href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' > <Button className='text-light' variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;