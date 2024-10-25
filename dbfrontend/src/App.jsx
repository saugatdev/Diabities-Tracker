// App.jsx
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import './index.css';
import { Toaster } from 'sonner';
import ProtectedRoute from './routes/protectedRoutes';
import Dashboard from './components/dasboard/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication state to true on successful login
  };

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard /> 
          </ProtectedRoute>
        } />
        
      
        {/* Redirect to dashboard if authenticated, otherwise show login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />

        {/* Registration route */}
        <Route
          path="/register"
          element={<RegisterForm />}
        />

        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Redirect any other route to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
