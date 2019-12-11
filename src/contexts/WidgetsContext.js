import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const WidgetsContext = createContext();

const WidgetContextProvider = (props) => {
    
    const [widgets, setWidgets] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/widgets`)
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