import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <React.Fragment>
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