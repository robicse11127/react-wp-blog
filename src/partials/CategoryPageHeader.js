import React, { useState, useEffect } from 'react';
import config from '../Config';
import Axios from 'axios';

const CategoryPageHeader = (props) => {

    const [category, setCategory] = useState('');

    useEffect(() => {
        Axios.get(`${config.app_url}/categories/`+props.id)
        .then( (res) => {
            setCategory( res.data )
        })
    },[category])

    return (
        <React.Fragment>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
        </React.Fragment>
    );
}
 
export default CategoryPageHeader;