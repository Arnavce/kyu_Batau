import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for routing

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
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Movies Collection
      </h1>

      {/* Wrapping everything in a container with a border */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              {/* Image section */}
              <div className="flex justify-center">
                <img
                  src={movie.image_url || "https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Template-Movie-Credits-StudioBinder.jpg"} // Placeholder for image, replace it later with the actual URL
                  alt={`${movie.title} Poster`}
                  className="w-64 h-96 object-cover rounded-lg shadow-lg mb-4"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800">{movie.title}</h2>
              <p className="text-gray-700 line-clamp-3">{movie.description}</p>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>⏳ {movie.duration} mins</span>
                <span>🌐 {movie.language}</span>
              </div>
              <div className="text-sm text-gray-600">🎭 Genre: {movie.genre}</div>
              <div className="text-sm text-gray-600">
                📅 Release:{" "}
                {new Date(movie.release_date).toLocaleDateString("en-GB")}
              </div>
              <div className="text-sm text-gray-600">⭐ IMDb: {movie.imdb_rating}</div>
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
                onClick={() => window.location.href = "http://localhost:5173/theaters"}
                className="bg-green-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-green-600 transition"
              >
                View Theaters
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
