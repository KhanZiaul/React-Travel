import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './SharedNav.css'
import { Link } from 'react-router-dom';

const SharedNav = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <img className='navLogo light' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='mx-4 fw-bold' href="#home">News</Nav.Link>
                        <Nav.Link className='mx-4 fw-2 fw-bold' href="#link">Destination</Nav.Link>
                        <Nav.Link className='mx-4 fw-2 fw-bold' href="#link">Blog</Nav.Link>
                        <Nav.Link className='mx-4 fw-2 fw-bold' href="#link">Contact</Nav.Link>
                        <Link to='/layout/login' > <Button className='text-light mx-4' variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SharedNav;