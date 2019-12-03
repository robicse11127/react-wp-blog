import React from 'react';

import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Blog</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
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