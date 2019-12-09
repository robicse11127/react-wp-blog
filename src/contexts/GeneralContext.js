import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const GeneralContext = createContext();

const GeneralContextProvider = ( props ) => {
    
    /**
     * Init General State
     */
    const[siteInfo, setSiteInfo] = useState({});

    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/general`)
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