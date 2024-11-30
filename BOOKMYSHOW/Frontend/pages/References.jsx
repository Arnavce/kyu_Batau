import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";

const SeatReferences = () => {
  const [seatReferences, setSeatReferences] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Fetch seat references data from the backend
    const fetchSeatReferences = async () => {
      try {
        const response = await axios.get("http://localhost:3000/seatreferences");
        setSeatReferences(response.data);
      } catch (error) {
        console.error("Error fetching seat references:", error);
      }
    };

    fetchSeatReferences();
  }, []);

  return (
    <div className="bg-gradient-to-r  from-black via-blue-900 to-blue-700 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">Seat References</h1>

      {/* Wrapping everything in a container with a border */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seatReferences.map((seat) => (
            <div
              key={seat.id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">Seat Type: {seat.seat_type}</h2>
              <p className="text-gray-700">{seat.description}</p>

              {/* Button to check seat availability */}
              <button
                onClick={() => navigate("/seats")} // Navigate to /seats
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-blue-600 transition"
              >
                Check Availability
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatReferences;
