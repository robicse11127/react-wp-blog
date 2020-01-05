import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MediaImageWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4 className="widget-title">{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <a href={props.widget.instance.link_url} target="_blank" rel="noopener noreferrer">
                    <img src={props.widget.instance.url} alt="" />
                </a>
            </Col>
        </Row>
    );
}
 
export default MediaImageWidget;