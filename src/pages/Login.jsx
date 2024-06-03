import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginComponent from '../components/LoginComponent';
import NewUserComponent from '../components/NewUserComponent';

import "./Login.css"


const Login = () => {
    return (
        <div className='loginBoxes'>
            
            <Tabs
                defaultActiveKey="Login"
                id="loginScreen"
                className="mb-3"
                variant='pills'
            >
                <Tab eventKey="Login" title="Login">                    
                    <LoginComponent />                    
                </Tab>                
                <Tab eventKey="New User" title="New User">                    
                    <NewUserComponent />                    
                </Tab>
            </Tabs>
        </div>
        
  );
}

export default Login;