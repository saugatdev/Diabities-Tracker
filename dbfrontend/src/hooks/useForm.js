import { toast } from 'sonner';
import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullname: '',
    contactnumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit fired with data:", formData);
  
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success('User registered successfully');
        setFormData({
          username: '',
          email: '',
          fullname: '',
          contactnumber: '',
          password: '',
        });
      } else {
        toast.error(data.message || 'An error occurred during registration');
      }
    } catch (error) {
      toast.error('Failed to register. Please try again.');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
