import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Row, Col } from 'react-bootstrap';

const CalendarWidget = () => {

    return (
        <Row>
            <Col md={12}>
                <Calendar value={new Date()}/>
            </Col>
        </Row>
    );
}
 
export default CalendarWidget;