import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const AuthMenu = () => {
    return (
        <Nav>
            <Link to={'/app/login'} className="nav-link">Login</Link>
            <Link to={'/app/signup'} className="nav-link">SignUp</Link>
        </Nav>
    );
}
 
export default AuthMenu;