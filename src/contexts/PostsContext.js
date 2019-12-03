import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

const PostsContextProvider = ( props ) => {

    const [posts,setPosts] = useState([]);
    const [params,setParams] = useState({
        per_page: 3,
        page: 1
    });
    const [meta, setMeta] = useState([]);

    const next = () => {
        if( params.page < meta['x-wp-totalpages'] ) {
            setParams({per_page: params.per_page, page: parseInt(params.page, 10) + 1})
        }
    }
    const prev = () => {
        if( params.page > 1 ) {
            setParams({per_page: params.per_page, page: parseInt(params.page, 10) - 1})
        }
    }

    useEffect( ()  => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: params
        })
        .then( (res) => {
            console.log(res);
            setPosts(res.data);
            setMeta(res.headers);
        })
    }, [params]);

    return (  
        <PostsContext.Provider value={{posts, meta, next, prev}}>
            { props.children }
        </PostsContext.Provider>
    );
}

export default PostsContextProvider;