import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenuWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4 className="widget-title">{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <Nav className="flex-column">
                    {
                        props.widget.value.map((item) => {
                            if(item.type == 'custom') {
                                return(
                                    <Link to={'/'+ item.url} className="nav-link">{item.title}</Link>
                                )
                            }else {
                                return(
                                    <Link to={'/page/'+ item.slug} className="nav-link">{item.title}</Link>
                                )
                            }
                        })
                    }
                </Nav>
            </Col>
        </Row>
    );
}
 
export default NavMenuWidget;