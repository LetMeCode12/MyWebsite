import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import "../navBar/myNavBar.scss"
import Underline from '../underline/underline';

function MyNavBar(props) {
    return (
        <Navbar className="myNavBar" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand >Witaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>props.history.push("/")} ><Underline>Strona główna</Underline></Nav.Link>
                   
                    <NavDropdown title={<Underline>Technologie</Underline>} className="dropDown" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>props.history.push("/FrontEnd")} ><Underline>Front-End</Underline></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>props.history.push("/BackEnd")} ><Underline>Back-End</Underline></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>props.history.push("/Tests")} ><Underline>Testy</Underline></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>props.history.push("/Else")} ><Underline>Pozostałe technologie</Underline></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(MyNavBar)