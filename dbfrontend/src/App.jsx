// App.jsx
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import './index.css';
import { Toaster } from 'sonner';
import ProtectedRoute from './routes/protectedRoutes';
import Dashboard from './components/dasboard/Dashboard';
import DarkModeToggle from './components/ui/DarkModeToggle';
import ProfileDashboard from './components/dasboard/profile';
import AboutUsPage from './pages/aboutus';

import BlogHomepage from './components/blogs/bloghomepage';
import SingleBlogPost from './components/blogs/contents/blog1';

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
        } 
        />

          
      <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProfileDashboard />
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
        {/*  other routes */}
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/about-us" element={<AboutUsPage />} />
       
        <Route path="/blogs" element={<BlogHomepage />} />
        <Route path="/blog/:id" element={<SingleBlogPost />} /> 
     
      </Routes>
    </Router>
  );
};

export default App;
