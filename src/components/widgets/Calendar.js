import React from 'react';
import Calendar from 'react-calendar';
import { Row, Col } from 'react-bootstrap';

const CalendarWidget = (props) => {

    return (
        <Row>
            <Col md={12}>
                <h4 className="widget-title">{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <Calendar value={new Date()}/>
            </Col>
        </Row>
    );
}
 
export default CalendarWidget;