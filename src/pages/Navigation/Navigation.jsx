import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <img className='navLogo' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <input type="text" placeholder='Search your Destination...' className='p-2 rounded mx-2' />
                        <Nav.Link className='mx-2 fw-bold' href="#home">News</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold' href="#link">Destination</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold' href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link><Button variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;