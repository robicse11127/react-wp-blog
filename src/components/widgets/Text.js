import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TextWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                {props.widget.instance.text}
            </Col>
        </Row>
    );
}
 
export default TextWidget;