import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<PrivateRoute component={Login} redirectTo="/home" />} />
                    <Route path="/register" element={<PrivateRoute component={Register} redirectTo="/home" />} />
                    <Route path="/home" element={<ProtectedRoute component={Home} redirectTo="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
<<<<<<< HEAD
                    <Route path='*' element={<Navigate to="/login" />}/>
=======
>>>>>>> origin/main
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const PrivateRoute = ({ component: Component, redirectTo }) => {
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};

const ProtectedRoute = ({ component: Component, redirectTo }) => {
    const { isAuthenticated, isLoading, userData } = useAuth();
    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <Component user={userData} /> : <Navigate to={redirectTo} />;
};

export default App;
