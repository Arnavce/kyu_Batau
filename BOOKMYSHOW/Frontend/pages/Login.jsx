import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Hardcoded password
    const hardcodedPassword = 'password';

    // Check if email and password are correct
    if (password !== hardcodedPassword) {
      setError('Invalid password.');
      return;
    }

    try {
      // Send GET request to check if email exists in backend
      const response = await fetch(`http://localhost:3000/users?email=${email}`);
      
      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      
      // If email is found in the backend, navigate to home page
      if (data && data.length > 0) {
        // User exists, proceed to home page
        navigate('/');
      } else {
        setError('Email not registered.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred during login');
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 min-h-screen flex justify-center items-center py-10 relative">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        {/* Simple popcorn icon in the upper-left corner */}
        <div className="absolute top-4 left-4">
          <img 
            src="https://img.icons8.com/ios/452/popcorn.png" 
            alt="Popcorn" 
            className="w-12 h-12 animate-bounce"
          />
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Movie Night Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-xl">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-xl">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Simple Popcorn image in the bottom-right corner */}
        <div className="absolute bottom-4 right-4">
          <img src="https://img.icons8.com/ios/452/popcorn.png" alt="Popcorn" className="w-10 h-10 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
