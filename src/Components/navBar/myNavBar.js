import React, { useEffect ,useRef} from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import "./myNavBar.scss"
import Underline from '../underline/underline';
import Logo from "../../Graphics/utp.png"

function MyNavBar(props) {

    let  myRef = useRef();

    const setSticky=()=>{
        myRef.current.style.position="sticky";
        document.documentElement.style.setProperty('--bgColor',"rgba(0, 0, 0, 0.5)");
        document.documentElement.style.setProperty('--hbgColor',"rgba(0, 0, 0, 0.7)");     
    }

    const setRelative=()=>{
        myRef.current.style.position="relative";      
        document.documentElement.style.setProperty('--bgColor',"linear-gradient(to left,rgba(99, 209, 252, 0.521),rgba(0, 174, 255, 1))");  
        document.documentElement.style.setProperty('--hbgColor',"rgb(0, 150, 219)");     
    }

    useEffect(()=>{
        setRelative();
        window.onscroll=()=>{
            if(window.scrollY>300){
                  setSticky(); 
            }else{
                  setRelative();
            }
        }
    })


    return (
        <Navbar className="myNavBar" bg="none" expand="lg" variant="dark" ref={myRef}>
            <Navbar.Brand ><div className="Title"><img className="Logo" src={Logo}/>Witaj</div></Navbar.Brand>
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