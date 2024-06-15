import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./css/LoginComponent.css"
import AccountService from '../services/Account.service';
import { useNavigate } from "react-router-dom";




const LoginComponent = ({ setUser }) => {

    const username = useRef();
    const password = useRef();
    const navigateTo = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            username: username.current.value,
            password: password.current.value
        }
        try {
            
        
        const response = await AccountService.login(formData);
        
            
            if (response.status === 200) {
            console.log(response.data.username, `<-->`);
            setUser(response.data.username);            
            navigateTo("/");
        } else {
            console.error("Login failed");
            }
        } catch (e) {
            console.error("Error during login: ", e);
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" ref={username}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password}  />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form >
    );
}

export default LoginComponent;