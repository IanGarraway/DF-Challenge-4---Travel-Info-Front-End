import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';


import "./css/Header.css"
import SavedList from "./SavedList.jsx"
import isMobile from "../utils/MobileDetector.js";


const Header = ({ location, savedLocations, user, setUser }) => {
    
    const notHomePage = (location != "Home")
    const locationsSaved = (savedLocations.length > 0);

    const username = user;

    const [collapse, setCollapse] = useState("");

    const logoutFunction = () => {
        setUser("");
        
    }
    
    let loginButton;
    if (user === "") {
        loginButton = (<Nav.Link href="/login">Login/Create Account</Nav.Link>)
    } else {
        loginButton = (<><Button variant="primary" onClick={logoutFunction}>{username}, Logout</Button></>)
    }

    useEffect(() => {

        setCollapse(!isMobile(window.innerWidth, screen.width))
        
    },[window.innerWidth, screen.width]);

    
    return (
        <>
            <div className="Header">
                <div id="leftSide">
                    <img className="logo" src="src\assets\logo.jpg" alt="DFC Travel Agency Logo" />                   
                
                </div>

                <div id="rightSide">
                    <Navbar variant="dark" key={false} expand={collapse} className="p-3 mb-2 bg-gradient-dark text-white">
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${false}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} >
                                        DFC Travel
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-start flex-grow-1 pe-3">
                                        {loginButton} 
                                        <Nav.Link href="/">Home</Nav.Link>
                                        {savedLocations.length>0 && <SavedList savedLocations={savedLocations} />}
                                    </Nav>
                                    <Form className="d-flex">
                                        {notHomePage && <Form.Control type="search" placeholder="Location Search..." className="me-2" aria-label="Search" />}
                                        {notHomePage && <Button variant="outline-success">Search</Button>}
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                    
                </div>
            </div>

        </>
    );
        
    

}

export default Header;