import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../navBar/myNavBar.scss"

function MyNavBar() {
    return (
        <div className="myNavBar">
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand >Witaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >Strona główna</Nav.Link>
                   
                    <NavDropdown title="Technologie" id="basic-nav-dropdown">
                        <NavDropdown.Item >Front-End</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Back-End</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default MyNavBar