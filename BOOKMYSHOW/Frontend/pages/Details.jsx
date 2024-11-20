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
        // Fetching all movies
        const movieResponse = await axios.get("http://localhost:3000/movies");
        setMovies(movieResponse.data);

        // Fetching cast, crew, and reviews data
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
    return <div>Loading...</div>;
  }

  return (
    
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-10">
      {/* Loop through movies and show their details with Cast, Crew, and Reviews */}
      <div className="max-w-4xl mx-auto space-y-6">
        {movies.map((movie) => (
          
          <div key={movie.id} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            {/* Movie Title and Basic Info */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{movie.title}</h2>
              <p className="text-gray-600">{movie.description}</p>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>⏳ {movie.duration} mins</span>
                <span>🌐 {movie.language}</span>
                <span>⭐ IMDb: {movie.imdb_rating}</span>
              </div>
                 {/* Image section */}
                 <div className="flex justify-center">
                <img
                  src={movie.image_url || "https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Template-Movie-Credits-StudioBinder.jpg"} // Placeholder for image, replace it later with the actual URL
                  alt={`${movie.title} Poster`}
                  className="w-64 h-96 object-cover rounded-lg shadow-lg mb-4"
                />
              </div>
              <a
                href={movie.trailer_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center block hover:bg-blue-600 transition"
              >
                Watch Trailer
              </a>
            </div>
               

            {/* Movie ID: Additional Information (Cast, Crew, Review) */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Movie ID: {movie.id}</h3>

              {/* Cast Section */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Cast</h3>
                <div className="space-y-2">
                  {casts
                    .filter((cast) => cast.movie_id === movie.id)
                    .map((cast) => (
                      <div key={cast.id} className="border-b py-2">
                        <p className="text-gray-700">
                          <strong>{cast.actor_name}</strong> as {cast.role}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Crew Section */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Crew</h3>
                <div className="space-y-2">
                  {crews
                    .filter((crew) => crew.movie_id === movie.id)
                    .map((crew) => (
                      <div key={crew.id} className="border-b py-2">
                        <p className="text-gray-700">
                          <strong>{crew.crew_member_name}</strong> - {crew.role}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Reviews</h3>
                {reviews.length > 0 ? (
                  reviews
                    .filter((review) => review.movie_id === movie.id)
                    .map((review) => (
                      <div key={review.id} className="border-t pt-4 space-y-2">
                        <p className="text-gray-700 font-medium">
                          <strong>{review.user.username}</strong> ({review.rating})
                        </p>
                        <p className="text-gray-600">{review.review_text}</p>
                        <p className="text-gray-500 text-sm">
                          Reviewed on: {new Date(review.review_date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
