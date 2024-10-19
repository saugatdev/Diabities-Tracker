// src/auth.js
export const registerUser = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'An error occurred during registration');
      }
  
      return data; // return data or success message
    } catch (error) {
      throw error; // forward error for handling in component
    }
  };
  