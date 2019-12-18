import React from 'react';
import renderHTML from 'react-render-html';
import { Row, Col } from 'react-bootstrap';

const CustomHtmlWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                {renderHTML(props.widget.instance.content)}
            </Col>
        </Row>
    );
}
 
export default CustomHtmlWidget;