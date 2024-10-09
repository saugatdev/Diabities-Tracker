import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        fullname: '',
        contactNumber: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Single handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isSignup ? 'http://localhost:3000/user/register' : 'http://localhost:3000/user/login'; // Adjust this to your API's endpoint
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    fullname: isSignup ? formData.fullname : undefined,
                    contactNumber: isSignup ? formData.contactNumber : undefined,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Sending data:", { username, email, password });

            console.log('Response from server:', data);
            // Redirect to dashboard or process data
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleForm = () => {
        setIsSignup(!isSignup);
        setFormData({
            username: '',
            email: '',
            fullname: '',
            contactNumber: '',
            password: ''
        });
    };

    return (
        <div className="container">
            <h2 className="title">{isSignup ? 'Sign Up' : 'Log In'}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleInputChange} 
                        required 
                        className="form-input"
                        placeholder="Username" 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className="form-input"
                        placeholder="Email" 
                    />
                </div>
                {isSignup && (
                    <>
                        <div className="form-group">
                            <label className="form-label">Full Name:</label>
                            <input 
                                type="text" 
                                name="fullname" 
                                value={formData.fullname} 
                                onChange={handleInputChange} 
                                required 
                                className="form-input"
                                placeholder="Full Name" 
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contact Number:</label>
                            <input 
                                type="text" 
                                name="contactNumber" 
                                value={formData.contactNumber} 
                                onChange={handleInputChange} 
                                required 
                                className="form-input"
                                placeholder="Contact Number" 
                            />
                        </div>
                    </>
                )}
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleInputChange} 
                        required 
                        className="form-input"
                        placeholder="Password" 
                    />
                </div>

                <button type="submit" className="form-button primary-button">
                    {isSignup ? 'Sign Up' : 'Log In'}
                </button>
            </form>
            <button onClick={toggleForm} className="form-button secondary-button">
                {isSignup ? 'Log In' : 'Sign Up'}
            </button>
        </div>
    );
};

export { AuthForm as default };
