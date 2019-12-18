import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

const PostsContextProvider = ( props ) => {
    /**
     * Init Post State
     */
    const [posts,setPosts] = useState([]);
    /**
     * Init Params State
     */
    const [params,setParams] = useState({
        per_page: 6,
        page: 1
    });
    /**
     * Init Meta State
     */
    const [meta, setMeta] = useState([]);

    /**
     * On Post Next Navigation
     */
    const next = () => {
        if( params.page < meta['x-wp-totalpages'] ) {
            setParams({per_page: params.per_page, page: parseInt(params.page, 10) + 1})
        }
    }

    /**
     * On Post Prev Navigation
     */
    const prev = () => {
        if( params.page > 1 ) {
            setParams({per_page: params.per_page, page: parseInt(params.page, 10) - 1})
        }
    }

    /**
     * Trigger Hook to fetch data
     */
    useEffect( ()  => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: params
        })
        .then( (res) => {
            setPosts(res.data);
            setMeta(res.headers);
        })
    }, [params]);

    /**
     * Return Provider
     */
    return (  
        <PostsContext.Provider value={{posts, meta, next, prev, params}}>
            { props.children }
        </PostsContext.Provider>
    );
}

export default PostsContextProvider;