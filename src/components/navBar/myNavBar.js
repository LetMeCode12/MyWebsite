import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import "../navBar/myNavBar.scss"
import Underline from '../underline/underline';

function MyNavBar(props) {
    return (
        <div className="myNavBar">
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand >Witaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>props.history.push("/")} ><Underline>Strona główna</Underline></Nav.Link>
                   
                    <NavDropdown title={<Underline>Technologie</Underline>} className="dropDown" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>props.history.push("/FrontEnd")} >Front-End</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>props.history.push("/BackEnd")} >Back-End</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>props.history.push("/Tests")} >Testy</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default withRouter(MyNavBar)