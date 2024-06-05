import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

import * as formik from 'formik';
import * as Yup from 'yup'

import "./css/LoginComponent.css"


const NewUserComponent = () => {
    const { Formik } = formik;
        
    const schema = Yup.object().shape({
        username: Yup.string()
            .max(15, 'Must be 15 characters of less')
            .required('Required'),
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Password must be at least 8 characters, have at least 1 upper case, 1 lower case, 1 number and 1 special character' })
            .required('Required'),
        terms: Yup.bool().required('Terms must be accepted').oneOf([true], 'Terms must be accepted'),
    });        

return (
    <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            username: '',
            name: '',
            email: '',
            password: '',
            terms: false,
        }}
    >
        {({handleSubmit, handleChange, values,touched, errors})=>(
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username&&!errors.username}
                        isInvalid={touched.username&&!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                        isInvalid={touched.name&&!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={touched.email&& !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={touched.password&&!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
            </Form.Group>
            
                <Form.Check                    
                    required
                    label="Agree to terms and conditions"
                    name="terms"                                   
                    onChange={handleChange}
                    isInvalid={!!errors.terms}                    
                    feedback="You must agree before submitting."
                    feedbackType="invalid"    
            />
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            )}
        </Formik>
    );
}

export default NewUserComponent;