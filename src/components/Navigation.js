import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">React Blog</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Enter Keywords" className="mr-sm-2" />
                        <Button variant="outline-info">Search </Button>
                    </Form>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Navigation;