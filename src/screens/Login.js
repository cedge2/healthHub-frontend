import React, { useState } from 'react';
import { Button, Input } from '../components/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form from causing page reload
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token); // Save the token to localStorage
      toast.success('Logged in successfully');
      navigate('/'); // Navigate to the home page after login
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Invalid credentials or server error');
    }
  };

  return (
    <div className="w-full h-screen flex-colo bg-dry">
      <form className="w-2/5 p-8 rounded-2xl mx-auto bg-white flex-colo" onSubmit={handleLogin}>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-48 h-16 object-contain"
        />
        <div className="flex flex-col gap-4 w-full mb-6">
          <Input
            label="Email"
            type="email"
            color={true}
            placeholder={'admin@gmail.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            color={true}
            placeholder={'*********'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          label="Login"
          Icon={BiLogInCircle}
          type="submit"
        />
      </form>
    </div>
  );
}

export default Login;
