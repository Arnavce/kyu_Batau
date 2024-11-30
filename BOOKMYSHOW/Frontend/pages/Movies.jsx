import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Movies Collection
      </h1>

      {/* Wrapping everything in a container with a border */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-slate-900 rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              {/* Movie Poster */}
              <img
                src= {movie.movie_poster}
                alt={`${movie.title} Poster`}
                className="w-full h-88 object-cover rounded-lg mb-4"
              />

              <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
              <p className="text-white line-clamp-3">{movie.description}</p>
              <div className="flex justify-between text-white text-sm">
                <span>⏳ {movie.duration} mins</span>
                <span>🌐 {movie.language}</span>
              </div>
              <div className="text-sm text-white">🎭 Genre: {movie.genre}</div>
              <div className="text-sm text-white">
                📅 Release:{" "}
                {new Date(movie.release_date).toLocaleDateString("en-GB")}
              </div>
              <div className="text-sm text-white">⭐ IMDb: {movie.imdb_rating}</div>
              <a
                href={movie.trailer_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white py-2 px-4 rounded-lg text-center block hover:bg-blue-600 transition"
              >
                Watch Trailer
              </a>

              {/* Button to navigate to Review page */}
              <Link
                to={`/moviedetails/${movie.id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-blue-600 transition"
              >
                Go to Review Page
              </Link>

              {/* New Button to redirect to Theaters Page */}
              <button
                onClick={() => (window.location.href = "http://localhost:5173/theaters")}
                className="bg-green-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-green-600 transition"
              >
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
