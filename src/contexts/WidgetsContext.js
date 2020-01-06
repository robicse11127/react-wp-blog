import React, { useState, useEffect, createContext } from 'react';
import config from '../Config';
import axios from 'axios';

export const WidgetsContext = createContext();

const WidgetContextProvider = (props) => {
    
    const [widgets, setWidgets] = useState([]);

    useEffect( () => {
        axios.get(`${config.api_url}/widgets`)
        .then( (res) => {
            setWidgets(res.data);
        })
    },[]);
    
    return (
        <WidgetsContext.Provider value={{widgets, setWidgets}}>
            { props.children }
        </WidgetsContext.Provider>
    );
}
 
export default WidgetContextProvider;