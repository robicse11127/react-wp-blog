import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import config from '../Config';

export const GeneralContext = createContext();

const GeneralContextProvider = ( props ) => {
    
    /**
     * Init General State
     */
    const[siteInfo, setSiteInfo] = useState('');

    useEffect( () => {
        axios.get(`${config.api_url}/general`)
        .then( (res) => {
            setSiteInfo(res.data)
        })
    }, []);

    return (
        <GeneralContext.Provider value={{siteInfo}}>
            { props.children }
        </GeneralContext.Provider>
    );
}
 
export default GeneralContextProvider;