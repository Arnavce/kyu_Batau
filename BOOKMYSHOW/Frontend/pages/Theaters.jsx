import React, { useEffect, useState } from "react";
import axios from "axios"; // To fetch the data

export const Theaters = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const response = await axios.get("http://localhost:3000/theaters"); // Adjust the URL if needed
        setTheaters(response.data);
      } catch (error) {
        console.error("Error fetching theaters:", error);
      }
    };

    fetchTheaters();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Theaters Collection
      </h1>

      {/* Wrapping everything in a container with a border */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {theaters.map((theater) => (
            <div
              key={theater.id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              {/* Theater Info */}
              <h2 className="text-2xl font-bold text-gray-800">{theater.name}</h2>
              <p className="text-gray-700">{theater.location}</p>
              <div className="text-sm text-gray-600">🎬 Screens: {theater.total_screens}</div>

              {/* Button to navigate to a specific theater details */}
              <a
                href={`/screens`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-blue-600 transition"
              >
                View Theater Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
