import React, { createContext, useMemo, useContext,useEffect, useState } from "react";

const UserContext = createContext(null);

function getLocalStorage(key, initialValue) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("error in setlocalstorage",e)
  }
}

export const UserProvider = ({children}) => {
 
  const [user, setUser] = useState(() => getLocalStorage("user", null));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLocalStorage("user", user);
  }, [user]);

    const contextValue = useMemo(() => ({
        user, 
        setUser, 
        loading, 
        setLoading
    }), [user, setUser, loading, setLoading]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;