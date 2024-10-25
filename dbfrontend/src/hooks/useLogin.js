import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit fired with data:", formData);

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response data:", data); // Log the response data

      if (response.ok) {
        console.log('Login successful!'); // Add this log
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        
        toast.success('Login successful!', {
          style: { backgroundColor: '#28a745', color: 'white' }
        });

        // Redirect to dashboard after login
        console.log('Navigating to dashboard');
        navigate('/dashboard');
      } else {
        toast.error(data.message || 'Login failed. Please check your credentials.', {
          style: { backgroundColor: '#dc3545', color: 'white' }
        });
      }
    } catch (error) {
      console.error('Login error:', error); // Log any error
      toast.error('Failed to log in. Please try again.', {
        style: { backgroundColor: '#dc3545', color: 'white' }
      });
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
