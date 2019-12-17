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
                            menus.top.map( (menu) => {
                                if(menu.parent_id != 0) {
                                    childMenus.push(menu)
                                }else {
                                    parentMenus.push(menu)
                                }
                            })
                        }
                        {
                            parentMenus.map( (parent, index) => {
                                return(
                                    <React.Fragment key={index}>
                                        {/* <Link to={parent.slug} className="nav-link">{parent.title} */}
                                        <NavDropdown title={parent.title}>
                                            {<Link to={'/page/'+parent.slug} className="dropdown-item">{parent.title}</Link>}
                                            {
                                                childMenus.map( (child, index) => {
                                                    if( parent.ID == child.parent_id ) {
                                                        return (
                                                            <Link key={index} to={'/page/'+child.slug} className="dropdown-item">{child.title}</Link>
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