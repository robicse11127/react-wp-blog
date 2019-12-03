import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SingleContext = createContext();

const SingleContextProvider = ( props ) => {
    /**
     * Init Single Post State
     */
    const [single, setSingle] = useState([]);
    /**
     * Init Slug State
     */
    const [slug, setSlug] = useState({
        slug: ''
    });

    /**
     * Update Post Slug
     */
    const updateSlug = (slug) => {
        setSlug( { slug: slug } )
    }

    /**
     * Trigger hook to fetch data
     */
    useEffect(() => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: {
                slug: 'redux-vs-react-context-api-hooks'
            }
        })
        .then((res) => {
            console.log(res)
        })
    },[slug])

    return (
        <SingleContext.Provider value={{single, updateSlug}}>
            { props.children }
        </SingleContext.Provider>
    );
}
 
export default SingleContextProvider;