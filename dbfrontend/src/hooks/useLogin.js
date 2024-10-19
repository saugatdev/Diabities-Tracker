import { useState } from 'react';
import { toast } from 'sonner'; // Import toast from Sonner

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

      if (response.ok) {
        // Show success toast with custom color
        toast.success('Login successful!', {
          style: { backgroundColor: '#28a745', color: 'white' } // Green background for success
        });
        // Optionally, store the token and redirect user
      } else {
        // Show error toast with custom color
        toast.error(data.message || 'Login failed. Please check your credentials.', {
          style: { backgroundColor: '#dc3545', color: 'white' } // Red background for error
        });
      }
    } catch (error) {
      // Show error toast with custom color
      toast.error('Failed to log in. Please try again.', {
        style: { backgroundColor: '#dc3545', color: 'white' } // Red background for error
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
