import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { error, createNewUser, signInUsingGoogle, setError, setUserName } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';



    const registerEmailAndPassword = () => {
        createNewUser(email, password)
            .then((result) => {
                setUserName(name);
                setError('')
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        registerEmailAndPassword();

    }
    return (
        <div className='form'>
            <h1>Create a New Account</h1>
            <Form onSubmit={handleRegistration}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <p>{error} </p>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Link to='/login'>Already have an Account?</Link>
            <hr className='ms-5' />
            <Button onClick={signInUsingGoogle}> Google Log In </Button>
        </div>
    );
};

export default Register;