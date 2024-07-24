// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, Ten: '' });

  const login = (Ten) => {
    setAuthState({ isAuthenticated: true, Ten });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, Ten: '' });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
