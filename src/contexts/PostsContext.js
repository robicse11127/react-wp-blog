import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

const PostsContextProvider = ( props ) => {
    /**
     * Init Post State
     */
    const [posts, setPosts] = useState([]);
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

    const undate_post_loved = (e) => {
        e.preventDefault();
        let postID = parseInt(e.currentTarget.getAttribute('data-post-id', 10));
        let love = parseInt(e.currentTarget.getAttribute('data-love'), 10);
        love += 1;

        let metadata = {
            metaboxes: {
                _post_loved: love
            }
        }

        let token = localStorage.getItem('token');
        if(token) {
            axios.post(`http://localhost/wp-react/wp-json/wp/v2/posts/${postID}`, metadata, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then( (res) => {
                let postItems = [...posts];
                postItems.map( (item) => {
                    if( item.id === postID ) {
                        item.metaboxes._post_loved = love;
                    }
                })
                setPosts(postItems);
            })
            .catch( (err) => {
                console.log(err.response);
            })
        }else {
            alert('You must logged in')
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
        <PostsContext.Provider value={{posts, meta, next, prev, params, undate_post_loved}}>
            { props.children }
        </PostsContext.Provider>
    );
}

export default PostsContextProvider;