import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <Nav className="flex-column">
                    {
                        props.widget.value.map((item) => {
                            return(
                                <Link to={'/category/'+item.term.term_id+'/posts'} className="nav-link">{item.term.name}</Link>
                            )
                        })
                    }
                </Nav>
            </Col>
        </Row>
    );
}
 
export default CategoryWidget;