import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="loading">
                        <h2>Loading...</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
} 
export default Loading;