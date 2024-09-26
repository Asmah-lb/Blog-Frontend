import React, { createContext, useContext, useState, useEffect} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[ user, setUser] = useState(Cookies.get('starterUser') ? JSON.parse(Cookies.get('starterUser')) : null);
    const[ token, setToken] = useState(Cookies.get('starterToken') || null);

    function handleChange(user, token){
        setUser(user);
        setToken(token);

    }
    useEffect(function(){
        Cookies.set("starterUser", JSON.stringify(user));
        Cookies,set("starterToken",token);
    }, [user, token]);

    let contextData = {
     user, token, handleChange
    }
    return <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)