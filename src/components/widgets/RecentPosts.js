import React from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecentPostsWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
            <ListGroup>
                {
                    props.widget.value.map( (item) => {
                        return(
                            <ListGroup.Item key={item.id}>
                                <Link to={'/'+item.slug}>{item.title}</Link>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </Col>
        </Row>
    );
}
 
export default RecentPostsWidget;