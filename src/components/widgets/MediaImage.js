import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MediaImageWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <a href={props.widget.instance.link_url} target="_blank">
                    <img src={props.widget.instance.url} />
                </a>
            </Col>
        </Row>
    );
}
 
export default MediaImageWidget;