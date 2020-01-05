import React, { useState, useEffect } from 'react';
import config from '../Config';
import Axios from 'axios';

const AuthorPageHeader = (props) => {

    const [user, setUser] = useState('');

    useEffect(() => {
        Axios.get(`${config.app_url}/users/`+props.id)
        .then( (res) => {
            setUser(res.data)
        })
    },[user]);

    return (
        <React.Fragment>
            <h1>{ user.name }</h1>
        </React.Fragment>
    );
}
 
export default AuthorPageHeader;