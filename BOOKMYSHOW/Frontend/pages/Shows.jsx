import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";

export const Shows = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get("http://localhost:3000/shows");
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Available Shows
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show) => (
            <div
              key={show.id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                BOOK FAST !!!
              </h2>
              <p className="text-gray-700">
                🕒 Time: {new Date(show.show_time).toLocaleString()}
              </p>
              <p className="text-gray-700">💵 Price: ₹{show.price}</p>
              <p className="text-gray-700">
                🪑 Seats Available: {show.available_seats}
              </p>
              <button
                onClick={() => navigate("/seatreferences")} // Navigate to /seatreferences
                className="bg-blue-500 text-white py-2 px-4 rounded-lg block text-center hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Shows;
