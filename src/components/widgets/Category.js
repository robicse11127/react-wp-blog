import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4 className="widget-title">{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <Nav className="flex-column">
                    {
                        props.widget.value.map((item, index) => {
                            return(
                                <Link to={'/category/'+item.term.term_id+'/posts'} className="nav-link" key={index}>{item.term.name}</Link>
                            )
                        })
                    }
                </Nav>
            </Col>
        </Row>
    );
}
 
export default CategoryWidget;