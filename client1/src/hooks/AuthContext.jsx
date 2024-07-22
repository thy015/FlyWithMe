// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, userName: '' });

  const login = (userName) => {
    setAuthState({ isAuthenticated: true, userName });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, userName: '' });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
