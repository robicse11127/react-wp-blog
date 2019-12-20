import React from 'react';
import { Redirect } from 'react-router-dom';
const Logout = () => {

    localStorage.setItem('token', '');
    return (
        <Redirect to="/app/login" />
    );
}
 
export default Logout;