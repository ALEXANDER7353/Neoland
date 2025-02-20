import { useState } from "react";   
import { createContext } from "react";
import { useEffect } from "react";

export const AuthContext = createContext()

    export const AuthProvider = (children) => {
      const [user, setUser] = useState();
      
     
      useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser (JSON.parse(storedUser));
        }
      }, []);
    
    
      const login = (user) => {
        setUser(user);
        localStorage.setItem("user",JSON.stringify(user));
      };


      const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
      }


      return (    
          <AuthContext.Provider value={{ user, login, logout }}>
              {children}
          </AuthContext.Provider>
      );
    }
    

