import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const RecentCommnetsWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4 className="widget-title">{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <ListGroup>
                    {
                        props.widget.value.map( (item) => {
                            return(
                                <ListGroup.Item>{item.comment_content}</ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Col>
        </Row>
    );
}
 
export default RecentCommnetsWidget;