// src/analytics.js
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your Measurement ID
export const initGA = () => {
  ReactGA.initialize('G-B5HX0HQVRY'); // Replace with your actual Google Analytics Measurement ID
};

// Function to log page views
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

// Optional: Add functions for other custom events if needed
export const logEvent = (action, category, label) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
