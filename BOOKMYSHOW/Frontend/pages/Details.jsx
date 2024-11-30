import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await axios.get("http://localhost:3000/movies");
        setMovies(movieResponse.data);

        const castResponse = await axios.get("http://localhost:3000/moviedetails/cast");
        setCasts(castResponse.data);

        const crewResponse = await axios.get("http://localhost:3000/moviedetails/crew");
        setCrews(crewResponse.data);

        const reviewResponse = await axios.get("http://localhost:3000/moviedetails/review");
        setReviews(reviewResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!movies || !casts || !crews || !reviews) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-800 to-black min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">Movie Details</h1>

      <div className="max-w-7xl mx-auto space-y-10">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Movie Poster */}
            <div className="md:flex">
              <div className="md:w-1/1">
                <img
                  src={movie.image_url || "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Movie Info */}
              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
                <p className="text-white mt-4">{movie.description}</p>

                <div className="mt-4 text-sm text-white">
                  <p>⏳ Duration: {movie.duration} mins</p>
                  <p>🌐 Language: {movie.language}</p>
                  <p>⭐ IMDb: {movie.imdb_rating}</p>
                  <p>📅 Release Date: {new Date(movie.release_date).toLocaleDateString("en-GB")}</p>
                </div>

                <a
                  href={movie.trailer_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition"
                >
                  Watch Trailer
                </a>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="p-6 space-y-6 bg-gray-800 rounded-lg mt-6">
              {/* Cast Card */}
              <div className="bg-[#1E2A47] p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-white">Cast</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {casts
                    .filter((cast) => cast.movie_id === movie.id)
                    .map((cast) => (
                      <div key={cast.id} className="bg-[#2C3E50] rounded-lg p-4 shadow-md">
                        <p className="text-white font-medium">{cast.actor_name}</p>
                        <p className="text-gray-400 text-sm">as {cast.role}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Crew Card */}
              <div className="bg-[#1E2A47] p-4 rounded-xl shadow-md mt-6">
                <h3 className="text-2xl font-semibold text-white">Crew</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {crews
                    .filter((crew) => crew.movie_id === movie.id)
                    .map((crew) => (
                      <div key={crew.id} className="bg-[#2C3E50] rounded-lg p-4 shadow-md">
                        <p className="text-white font-medium">{crew.crew_member_name}</p>
                        <p className="text-gray-400 text-sm">{crew.role}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Reviews Card */}
              <div className="bg-[#1E2A47] p-4 rounded-xl shadow-md mt-6">
                <h3 className="text-2xl font-semibold text-white">Reviews</h3>
                <div className="space-y-4 mt-4">
                  {reviews
                    .filter((review) => review.movie_id === movie.id)
                    .map((review) => (
                      <div
                        key={review.id}
                        className="bg-[#2C3E50] rounded-lg p-4 shadow-md space-y-2"
                      >
                        <p className="text-white font-medium">{review.user.username}</p>
                        <p className="text-gray-400">{review.review_text}</p>
                        <p className="text-gray-500 text-sm">
                          Reviewed on:{" "}
                          {new Date(review.review_date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                    ))}
                  {reviews.filter((review) => review.movie_id === movie.id).length === 0 && (
                    <p className="text-gray-400">No reviews yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
