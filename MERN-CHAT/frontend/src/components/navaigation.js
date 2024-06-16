import React from "react";
import { useSelector } from 'react-redux';
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutUserMutation } from '../service/api'
import logo from '../assets/logo.png'
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    const handleLogout = async (e) => {

        e.preventDefault();
        await logoutUser(user);
        window.location.replace('/')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} style={{ width: 50, height: 50 }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            !user && (
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            )
                        }

                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        {
                            user && (
                                <NavDropdown
                                    title={
                                        <><img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                            {user.name}
                                        </>
                                    }
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation