import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Navigation.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navigation = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar expand="lg">
            <Container >
                <Link to="/">
                    <img className='navLogo' src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div>
                            <input type="text" placeholder='Search your Destination...' className='px-5 py-2 rounded mx-2 border-light opacity-75' />
                        </div>
                        <Nav.Link className='mx-2 fw-bold text-light' href="#home">News</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold text-light' href="#link">Destination</Nav.Link>
                        <Nav.Link className='mx-2 fw-2 fw-bold text-light' href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ?
                                <div>
                                    <span className='text-light mx-3 fw-bold'>{user.displayName
                                    }</span>
                                    <Link to='/layout/login' > <Button className='text-light' variant="dark">Logout</Button></Link>
                                </div>
                                :
                                <Link to='/layout/login' > <Button className='text-light' variant="dark">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;