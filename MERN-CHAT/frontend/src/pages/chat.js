import React from 'react'
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import Sidebar from '../components/sidebar';
import MessageForm from '../components/messageForm';
const chat = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    )
}

export default chat