import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const ScreenDisplay = () => {
  const [screens, setScreens] = useState([]);

  useEffect(() => {
 
    const fetchScreens = async () => {
      try {
        const response = await axios.get("http://localhost:3000/screens");
        setScreens(response.data);
      } catch (error) {
        console.error("Error fetching screens:", error);
      }
    };

    fetchScreens();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">Theater Screens</h1>

      {/* Wrapping everything in a container with a border */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 border border-gray-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                Screen Type: {screen.screen_type}
              </h2>

              <p className="text-gray-700">Total Seats: {screen.total_seats}</p>

              {/* Button to navigate to Seat References page */}
              <Link
                to="/shows"
                className="bg-green-500 text-white py-2 px-4 rounded-lg text-center block mt-4 hover:bg-blue-600 transition"
              >
                Shows
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenDisplay;
