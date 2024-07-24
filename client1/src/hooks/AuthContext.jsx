import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    const isAdmin = () => {
        return user?.QuyenSuDung === 'Admin';
    };

    const authState = {
        isAuthenticated: !!user,
        user,
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
