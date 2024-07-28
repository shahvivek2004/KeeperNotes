import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:4000";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        try {
            const res = await axios.get(`${API_URL}/home`, { withCredentials: true });
            setIsAuthenticated(true);
            setUserData(res.data.user);
        } catch (err) {
            setIsAuthenticated(false);
            setUserData(null);
            console.error("Authentication check failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, setIsAuthenticated, setUserData, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
