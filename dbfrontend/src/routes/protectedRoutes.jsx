// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/login" />;
  }

  // Decode the token to get the expiration time
  const tokenPayload = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  // Check if the token is expired
  if (currentTime >= tokenPayload.exp) {
    // If token has expired, remove it from localStorage and redirect to login
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }

  // If token exists and is valid, render the child component (e.g., Dashboard)
  return children;
};

export default ProtectedRoute;
