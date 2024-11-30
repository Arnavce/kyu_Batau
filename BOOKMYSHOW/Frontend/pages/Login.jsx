import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const hardcodedPassword = 'password';

    if (password !== hardcodedPassword) {
      setError('Invalid password.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/users?email=${email}`);

      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();

      if (data && data.length > 0) {
        navigate('/');
      } else {
        setError('Email not registered.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred during login');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1594886801340-88d2d9c028e2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex justify-center items-center py-10 relative"
    >
      <div
        className="p-8 rounded-xl shadow-xl max-w-md w-full relative bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg"
      >
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-6" style={{ textShadow: '2px 2px 5px black' }}>
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-yellow-300 text-xl"
              style={{ textShadow: '1px 1px 3px black' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-yellow-300 text-xl"
              style={{ textShadow: '1px 1px 3px black' }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center mt-2" style={{ textShadow: '1px 1px 3px black' }}>
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Not Registered Warning */}
        <div className="mt-4 text-center">
          <p
            className="text-yellow-300 text-sm"
            style={{ textShadow: '1px 1px 3px black' }}
          >
            Not registered?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-yellow-400 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
