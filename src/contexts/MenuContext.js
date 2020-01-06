import React, { useState, createContext, useEffect } from 'react';
import config from '../Config';
import axios from 'axios';

export const MenuContext = createContext();

const MenuContextProvider = ( props ) => {
    
    /**
     * Init Menu State
     */
    const [menus, setMenus] = useState('');

    useEffect( () => {
        axios.get(`${config.api_url}/menus`)
        .then( (res) => {
            setMenus(res.data);
        })
    }, []);
    
    return (
        <MenuContext.Provider value={{menus}}>
            { props.children }
        </MenuContext.Provider>
    );
}
 
export default MenuContextProvider;
