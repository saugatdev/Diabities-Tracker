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
import DiaBuddyLandingPage from './pages/landingpage';
import BlogHomepage from './components/blogs/bloghomepage';
import SingleBlogPost from './components/blogs/contents/blog1';
import ReactGA from 'react-ga4';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const [showLogin, setShowLogin] = useState(true);


  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication state to true on successful login
  };

  ReactGA.initialize('G-B5HX0HQVRY');

// AnalyticsTracker component to handle route changes and page views
const AnalyticsTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};


  return (
    <>
    
    <Router>
      
    <Toaster position="top-center" />
    <Routes>
      
      {/* Landing page at the root path */}
      <Route path="/" element={<DiaBuddyLandingPage />} />
  
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProfileDashboard />
          </ProtectedRoute>
        }
      />
  
      {/* Login and registration routes */}
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
      <Route path="/register" element={<RegisterForm />} />
  
      {/* Other routes */}
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/blogs" element={<BlogHomepage />} />
      <Route path="/blog/:id" element={<SingleBlogPost />} />
  
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  </>
  );
};

export default App;
