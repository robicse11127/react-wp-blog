import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

const PostsContextProvider = ( props ) => {

    const [posts,setPosts] = useState([]);

    useEffect( ()  => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: {
                per_page: 1,
                page: 1
            }
        })
        .then( (res) => {
            console.log(res.data)
        })
    })

    return (  
        <PostsContext.Provider value={{posts: posts}}>
            { props.children }
        </PostsContext.Provider>
    );
}

export default PostsContextProvider;