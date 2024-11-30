import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa'; // Movie icon

const Home = () => {
  const navigate = useNavigate();

  // Navigation functions
  const goToMovies = () => {
    navigate('/movies');
  };
  const goToSIGNUP = () => {
    navigate('/signup');
  };
  const goToSignin = () => {
    navigate('/login');
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551712766-817b7d0e8291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col justify-between text-white relative"
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* App Bar */}
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 shadow-lg z-20">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <FaFilm className="text-yellow-500" size={32} />
            <h1 className="text-2xl font-bold text-white tracking-wider">KYU BATAU</h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={goToSIGNUP}
              className="py-2 px-4 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all"
            >
              SIGN UP
            </button>
            <button
              onClick={goToSignin}
              className="py-2 px-4 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center text-center px-4 relative z-10 space-y-8 mt-20">
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-2xl">
         
          <h1 className="text-6xl font-bold mb-4 leading-tight">
           Bringing the Box Office to Your Fingertips<br />
            <span className="text-yellow-500">Movie Booking</span>
          </h1>
          <p className="text-2xl">
            Discover, explore, and book your favorite movies effortlessly.
          </p>
        </div>

        <button
          onClick={goToMovies}
          className="py-4 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xl font-bold rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
        >
          Browse Movies Now
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6 relative z-10">
        © 2024 Kyu Batau Movies. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
