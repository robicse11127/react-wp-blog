import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
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
    if( menus == '' ) {
        return menus;
    }

    var parentMenus = [];
    var childMenus = [];

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">{siteInfo.site_title}</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {
                            menus.primary.map( (menu) => {
                                if(menu.parent_id != 0) {
                                    childMenus.push(menu)
                                }else {
                                    parentMenus.push(menu)
                                }
                            })
                        }
                        {
                            parentMenus.map( (parent) => {
                                return(
                                    <React.Fragment>
                                        {/* <Link to={parent.slug} className="nav-link">{parent.title} */}
                                        <NavDropdown title={parent.title}>
                                            {<NavDropdown.Item href={parent.slug}>{parent.title}</NavDropdown.Item>}
                                            {
                                                childMenus.map( (child) => {
                                                    if( parent.ID == child.parent_id ) {
                                                        return (
                                                            
                                                            <NavDropdown.Item href={child.slug}>{child.title}</NavDropdown.Item>
                                                        )
                                                    }
                                                })
                                            }
                                        </NavDropdown>
                                    </React.Fragment>
                                )
                            })
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