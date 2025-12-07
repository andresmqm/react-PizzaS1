import { createContext, useState } from "react";

export const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {

    const [token, setToken] = useState(true);

    const logout=() => {setToken(false);};
    

    return (


        <LogoutContext.Provider value={{ token, logout }}>
            {children}
        </LogoutContext.Provider>
        );
};