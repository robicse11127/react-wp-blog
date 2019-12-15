import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <ListGroup>
                    {
                        props.widget.value.map((item) => {
                            return(
                                <ListGroup.Item>
                                    <Link to={'/category/'+item.term.term_id+'/posts'}>{item.term.name}</Link>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Col>
        </Row>
    );
}
 
export default CategoryWidget;