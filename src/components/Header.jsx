import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';


import "./css/Header.css"
import SavedList from "./SavedList.jsx"
import isMobile from "../utils/MobileDetector.js";


const Header = ({ location, savedLocations, user }) => {
    
    const notHomePage = (location != "Home")
    const locationsSaved = (savedLocations.length > 0);

    if (isMobile(window.innerWidth, screen.width)) {
        return (
            <>
                <div className="Header">
                <div id = "leftSide">
                <img className="logo" src="src\assets\logo.jpg" alt="DFC Travel Agency Logo" />
                </div>

                <div id="rightSide">
                    <Navbar variant = "dark" key={false} expand={false} className="p-3 mb-2 bg-gradient-dark text-white">
                     <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`}/>
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
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <SavedList savedLocations={savedLocations} />
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
    return (
        <>
            <div className="Header">
                <div id = "leftSide">
                    <img className="logo" src="src\assets\logo.jpg" alt="DFC Travel Agency Logo" />
                    <Button className = "headerButtons" href="#" type = "submit">Home</Button>{``}
                    <SavedList savedLocations={savedLocations} />
                </div>
                <div id = "rightSide">
                    {notHomePage && <input type="search" placeholder="Location Search..." id="searchBox" aria-label="Search" />}
                </div>
            </div>
        </>
    )

}

export default Header;