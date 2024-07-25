import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('access_token') || null);

    const login = (user, token) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('access_token', token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('access_token');
    };

    const isAdmin = () => {
        return user?.QuyenSuDung === 'Admin';
    };

    const authState = {
        isAuthenticated: !!user,
        user,
        token
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
