import React, {useEffect} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginComponent from '../components/LoginComponent';
import NewUserComponent from '../components/NewUserComponent';

import "./css/Login.css"


const Login = ({ setUser, location, setLocation, }) => {
   useEffect(() => {
        
        if (location != "Login") setLocation("Login");
    }, [location]);    
    
    return (
        <div className='loginScreen'>
            <div className='loginBoxes'>
            
                <Tabs
                    defaultActiveKey="Login"
                    id="loginScreen"
                    className="mb-3"
                    variant='pills'
                >
                    <Tab eventKey="Login" title="Login">
                        <LoginComponent setUser={setUser}  />
                    </Tab>
                    <Tab eventKey="New User" title="New User">
                        <NewUserComponent />
                    </Tab>
                </Tabs>
            </div>
        </div>
        
    );
}

export default Login;