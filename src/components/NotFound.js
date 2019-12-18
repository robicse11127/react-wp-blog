import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="nothing-found">
                        <h2>Snap! Are you lost?</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
} 
export default NotFound;