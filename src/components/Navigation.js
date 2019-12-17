import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import { GeneralContext } from '../contexts/GeneralContext';
import { MenuContext } from '../contexts/MenuContext';
import { SearchContext } from '../contexts/SearchContext';

const Navigation = (props) => {
    let history = useHistory();

    /**
     * Init Search Keyword State
     */
    const [keyword, setKeyword] = useState('');

    /**
     * Destructuring SearchContext
     */
    const { handleSearch } = useContext( SearchContext );

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

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">{siteInfo.site_title}</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {
                            menus.top.map( (menu, index) => {
                                if( menu.child.length == 0 ) {
                                    if( menu.parent.type == 'post_type' ) {
                                        var url = '/page/'+menu.parent.slug;
                                    }else {
                                        var url = menu.parent.url;
                                    }
                                    return(
                                        <React.Fragment key={index}>
                                            <Link to={url} className="nav-link">{menu.parent.title}</Link>
                                        </React.Fragment>
                                    )
                                }else {
                                    return(
                                        <React.Fragment key={index}>
                                            <NavDropdown title={menu.parent.title}>
                                                <Link to={'/page/'+menu.parent.slug} className="dropdown-item">{menu.parent.title}</Link>
                                                {
                                                    menu.child.map( (child, index) => {
                                                        if( menu.child.type == 'post_type' ) {
                                                            var url = '/page/'+menu.parent.slug;
                                                        }else {
                                                            var url = menu.parent.url;
                                                        }
                                                        return (
                                                            <Link key={index} to={url} className="dropdown-item">{child.title}</Link>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                        </React.Fragment>
                                    )
                                }
                            })
                        }
                    </Nav>
                    <Form inline onSubmit={ (e) => handleSearch(e, keyword)}>
                        <FormControl type="text" placeholder="Enter Keywords" className="mr-sm-2" value={keyword} onChange={ (e) => setKeyword(e.target.value) }  />
                        <input type="submit" className="btn btn-info" value="Search" />
                    </Form>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Navigation;