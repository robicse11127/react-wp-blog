import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { WidgetsContext } from '../contexts/WidgetsContext';

const Footer = () => {

    const { widgets } = useContext(WidgetsContext);

    if(widgets == '') {
        return widgets;
    }

    return (
        <React.Fragment>
            <div className="footer-widget-area">
                <Container>
                    <Row>
                        <Col md={4}>
                        {
                            widgets['sidebar-1'].map( (widget) => {
                                return(
                                    <Row>
                                        <Col>
                                            <h4>{widget.instance.title}</h4>
                                        </Col>
                                        {
                                           
                                            widget.value.map( (item) => {
                                                return(
                                                    <p>{item.comment_content}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                )
                            })
                        }
                        </Col>
                        <Col md={4}>
                        {
                            widgets['sidebar-2'].map( (widget) => {
                                return(
                                    <Row>
                                        <Col>
                                            <h4>{widget.instance.title}</h4>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        </Col>
                        <Col md={4}>
                        {
                            widgets['sidebar-3'].map( (widget) => {
                                return(
                                    <Row>
                                        <Col>
                                            <h4>{widget.instance.title}</h4>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Blog</Navbar.Brand>
                        <Nav className="mr-auto">
                    </Nav>
                    <div>
                        <p className="copyright-text">2020. All Rights Reserved &copy; Rabiul</p>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Footer