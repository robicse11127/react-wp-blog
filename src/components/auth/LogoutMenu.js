import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const LogoutMenu = () => {
    return (
        <Nav>
            <Link to={'/app/logout'} className="nav-link">Logout</Link>
        </Nav>
    );
}
 
export default LogoutMenu;