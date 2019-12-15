import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CategoryPageHeader = (props) => {

    const [category, setCategory] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost/wp-react/wp-json/wp/v2/categories/`+props.id)
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