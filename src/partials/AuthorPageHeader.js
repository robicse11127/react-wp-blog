import React, { useState, useEffect } from 'react';
import { Row, Jumbotron } from 'react-bootstrap';
import Axios from 'axios';

const AuthorPageHeader = (props) => {

    const [user, setUser] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost/wp-react/wp-json/wp/v2/users/`+props.id)
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