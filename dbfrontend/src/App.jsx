import React, { useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import './index.css';
import { Toaster } from 'sonner';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <div className="flex items-center justify-center min-h-screen  bg-white-100  ">
      <div className="p-6 max-w-md bg-white rounded-lg shadow-md  ">
        {showLogin ? (
          <LoginForm onToggle={() => setShowLogin(false)} />
        ) : (
          <RegisterForm onToggle={() => setShowLogin(true)} />
        )}
      </div>
      <Toaster position="top-center" />
    </div>
    </>
  );
};

export default App;
