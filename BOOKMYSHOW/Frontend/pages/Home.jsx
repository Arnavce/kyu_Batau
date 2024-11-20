import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa'; // Movie icon

const Home = () => {
  const navigate = useNavigate();

  // Navigate to /movies
  const goToMovies = () => {
    navigate('/movies');
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 min-h-screen flex flex-col justify-center items-center text-white py-10">
      <div className="text-center mb-10">
        <FaFilm size={80} className="animate-pulse mb-4" />
        <h1 className="text-4xl font-bold mb-4">WELCOME TO KYU BATAU MOVIE BOOKING AAP</h1>
        <p className="text-xl">Your one-stop destination for the best movie booking experience!</p>
      </div>

      <div className="space-x-4">
        <button
          onClick={goToMovies}
          className="py-3 px-6 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
        >
          Browse Movies
        </button>
      </div>
    </div>
  );
};

export default Home;
