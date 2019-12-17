import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {

    let history = useHistory();
    
    /**
     * Init SearchPosts State
     */
    const [searchPosts, setSearchPosts] = useState([]);

    /**
     * Init Params State
     */
    const [params, setParams] = useState({
        subtype: 'post',
        search: '',
        per_page: 3,
        page: 1
    })

    /**
     * Init Meta State
     */
    const [meta, setMeta] = useState([]);

    /**
     * Search
     */
    const handleSearch = (e, search) => {
        e.preventDefault();
        history.push('/search/'+search);

        setParams({
            subtype: 'post',
            search: search,
            per_page: 3,
            page: 1
        })
    }

    /**
     * On Post Next Navigation
     */
    const next = (search) => {
        if( params.page < meta['x-wp-totalpages'] ) {
            setParams({
                subtype: 'post',
                search: search,
                per_page: params.per_page, 
                page: parseInt(params.page, 10) + 1
            })
        }
    }

    /**
     * On Post Prev Navigation
     */
    const prev = (search) => {
        if( params.page > 1 ) {
            setParams({
                subtype: 'post',
                search: search,
                per_page: params.per_page, 
                page: parseInt(params.page, 10) - 1
            })
        }
    }

    /**
     * Trigger hook to fetch data
     */
    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/search`, {
            params: params
        })
        .then( (res) => {
            setSearchPosts(res.data)
            setMeta(res.headers);
        })  
    }, [params] )

    /**
     * Return Provider
     */
    return (
        <SearchContext.Provider value={{searchPosts, params, meta, handleSearch, prev, next}}>
            { props.children }
        </SearchContext.Provider>
    );
}
 
export default SearchContextProvider;