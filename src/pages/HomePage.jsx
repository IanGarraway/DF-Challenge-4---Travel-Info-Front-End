import React, { useState, useEffect } from "react";


import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./css/HomePage.css";

const HomePage = ({ destinationSelect, location, setLocation}) => {
    useEffect(() => {
        
        if (location != "HomePage") setLocation("HomePage");
    }, [location]);   
    
    
    const [destination, setDestination] = useState("");
    const handleChange = (e) => {
        setDestination(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        destinationSelect(destination);
        
    }

    return (
        <>
            <div className="content">
                <div className="home">
                    <Form className={["justify-content-center", "align-content-center"]} onSubmit={handleSubmit}>
            
                        <Form.Group className="mb-3" >
                            <Form.Label className={["text-dark", "font-weight-bolder", "w-100", "rounded-top", "bg-light"]} column="lg" lg={2}>Tell me about...</Form.Label>
                            <Form.Control
                                type="String"
                                placeholder="Location name..."
                                onChange={handleChange}
                            />
                        </Form.Group>
                         <Button className={["w-75", "align-self-center"]} size="lg" type="submit" data-testid={"searchButton"} >
                            Search...
                        </Button>
                    
                    </Form>
                </div>
            </div>
        </>
    
    )
}

export default HomePage;
