import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import { GeneralContext } from '../contexts/GeneralContext';
import { MenuContext } from '../contexts/MenuContext';

const Navigation = () => {

    /**
     * Destructure GeneralContext
     */
    const { siteInfo } = useContext(GeneralContext);
    /**
     * Destructure MenuContext
     */
    const { menus } = useContext(MenuContext);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">{siteInfo.site_title}</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {
                            console.log(menus)
                            // menus.map( (menu) => {
                            //     return(
                            //         <Link to="/" className="nav-link">{menu.title}</Link>
                            //     );
                            // } )
                        }
                        
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