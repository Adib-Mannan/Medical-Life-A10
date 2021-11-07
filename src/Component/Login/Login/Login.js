import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signInUsingGoogle, processLogin, setIsLoading, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const googleLog = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }
    const emailAndPasswordLog = () => {
        processLogin(email, password)
            .then((result) => {
                setError('');
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault();
        emailAndPasswordLog();
    }
    return (
        <div className='form'>
            <h1>Log In </h1>
            <Form onSubmit={handleLogin}>
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
                        <Button type="submit">Log in</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Link to='/register'>Create a new account ?</Link>
            <hr className='ms-5' />
            <Button onClick={googleLog}> Google Log In </Button>

        </div>
    );
};

export default Login;