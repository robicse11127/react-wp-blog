import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { WidgetsContext } from '../contexts/WidgetsContext';
import { Link } from 'react-router-dom';
import Widgets from './widgets/Widgets';

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
                        <Col md={3}>
                        {
                            widgets['footer-sidebar-1'].map( (widget, index) => {
                                return (
                                    <Widgets widget={widget} key={index} />
                                )
                            })
                        }
                        </Col>
                        <Col md={3}>
                        {
                            widgets['footer-sidebar-2'].map( (widget, index) => {
                                return (
                                    <Widgets widget={widget} key={index} />
                                )
                            })
                        }
                        </Col>
                        <Col md={3}>
                        {
                            widgets['footer-sidebar-3'].map( (widget, index) => {
                                return (
                                    <Widgets widget={widget} key={index} />
                                )
                            })
                        }
                        </Col>
                        <Col md={3}>
                        {
                            widgets['footer-sidebar-4'].map( (widget, index) => {
                                return (
                                    <Widgets widget={widget} key={index} />
                                )
                            })
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <div className="copyright-sidebar">
                        <Navbar.Brand>
                            <Link to="/" className="navbar-brand">
                                {
                                    widgets['copyright-sidebar-1'].map( (widget, index) => {
                                        return (
                                            <Widgets widget={widget} key={index} />
                                        )
                                    })
                                }
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <div className="copyright-sidebar">
                    {
                        widgets['copyright-sidebar-2'].map( (widget, index) => {
                            return (
                                <Widgets widget={widget} key={index} />
                            )
                        })
                    }
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Footer