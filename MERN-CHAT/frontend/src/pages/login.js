import React, { useState, useContext } from 'react'
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useLoginUserMutation } from "../service/api";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import './login.css'
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { socket } = useContext(AppContext);
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                // socket work
                socket.emit("new-user");
                // navigate to the chat
                navigate("/chat");
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col md={5} className="login__bg"></Col>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Don't have an account ? <Link to="/signup">Signup</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login