import React from 'react';
import { Redirect } from 'react-router-dom';
const Logout = () => {

    localStorage.setItem('token', '');
    localStorage.setItem('userName', '');
    return (
        <Redirect to="/app/login" />
    );
}
 
export default Logout;