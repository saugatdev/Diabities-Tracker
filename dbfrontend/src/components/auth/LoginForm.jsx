import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import '../../index.css';

const LoginForm = ({ onToggle }) => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: 'black' }}>
      Diabetes Tracker
    </h1>
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder="johndoe@gmail.com" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input type="password" placeholder="Enter your password" className="w-full" />
        </div>
        <div>
          Don’t have an account? 
          <a href="#" onClick={onToggle} className="text-blue-500 underline ml-1">Register Now</a>
        </div> 
        <br />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Card>
  </>
);

export default LoginForm;
