import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenuWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <ListGroup>
                    {
                        props.widget.value.map((item) => {
                            if(item.type == 'custom') {
                                return(
                                    <ListGroup.Item>
                                        <Link to={'/'+ item.url}>{item.title}</Link>
                                    </ListGroup.Item>
                                )
                            }else {
                                return(
                                    <ListGroup.Item>
                                        <Link to={'/page/'+ item.slug}>{item.title}</Link>
                                    </ListGroup.Item>
                                )
                            }
                        })
                    }
                </ListGroup>
            </Col>
        </Row>
    );
}
 
export default NavMenuWidget;