import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCookies  } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";


import Offcanvas from 'react-bootstrap/Offcanvas';


import "./css/Header.css"
import SavedList from "./SavedList.jsx"
import isMobile from "../utils/MobileDetector.js";
import AccountService from "../services/Account.service.js";


const Header = ({ location, savedLocations, user, setUser, destinationSelect }) => {
    
    const notHomePage = (location != "HomePage")
    const locationsSaved = (savedLocations.length > 0);
    const searchBoxValue = useRef();
    const [collapse, setCollapse] = useState("");
    const navigateTo = useNavigate();
    const [cookies, setCookie] = useCookies(['username']);
    

    const username = user;

    

    const logoutFunction = async () => {
        const response = await AccountService.logout();
        if (response.status === 200) {
            
            setCookie('username', "", { path: '/', maxAge: 0 });
            setUser("");
            
        }
        
    }
    const searchHandler = (e) => {        
        console.log(searchBoxValue.current.value);
        destinationSelect(searchBoxValue.current.value);
        navigateTo(`/${searchBoxValue.current.value}`);
    }
    
    let loginButton;
    if (user === "") {
        loginButton = (<Nav.Link href="/login">Login/Create Account</Nav.Link>)
    } else {
        loginButton = (<><Navbar.Text onClick={logoutFunction}>{username}, Logout</Navbar.Text></>)
    }

    useEffect(() => {

        setCollapse(!isMobile(window.innerWidth, screen.width))
        
    },[window.innerWidth, screen.width]);

    
    return (
        <>
            <div className="Header">
                
                <Container fluid>
                    <Navbar variant="dark" key={false} expand={collapse} className="p-3 mb-2 bg-gradient-dark text-white">
                        <Container fluid>
                            <Navbar.Brand href="#"><img className="logo" src="src\assets\logo.jpg" alt="DFC Travel Agency Logo" /></Navbar.Brand>
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
                                    <Col>
                                    <Nav className="flex">
                                        {loginButton}
                                        {notHomePage && <Nav.Link href="/">Home</Nav.Link>}
                                        {savedLocations.length > 0 && <SavedList savedLocations={savedLocations} />}
                                        </Nav>
                                        </Col>
                                    <Nav className="float-md-end">
                                        <Form onSubmit={searchHandler}>
                                            {notHomePage && <Form.Control type="search" placeholder="Location Search..." className="me-2" aria-label="Search" ref={searchBoxValue} />}
                                            {notHomePage && <Button variant="outline-success" onClick={searchHandler}>Search</Button>}
                                        </Form>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </Container>

                    
            </div>
            

        </>
    );
        
    

}

export default Header;