import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importing axios

const Seats = () => {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await fetch("http://localhost:3000/seats/"); // Adjust route if needed
        const data = await response.json();
        setSeats(data); // This will store fetched data, but it's not used in the layout
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };

    fetchSeats();
  }, []);

  const generateSeats = () => {
    const totalRows = 5;
    const totalColumns = [4, 6, 8, 10, 12];
    const simulatedSeats = [];

    for (let row = 1; row <= totalRows; row++) {
      const seatRow = [];
      const columnCount = totalColumns[row - 1];

      for (let column = 1; column <= columnCount; column++) {
        const seatNumber = `${row}-${column}`;
        const isBooked = Math.random() < 0.5; // Randomly simulate booking status

        seatRow.push({
          seat_number: seatNumber,
          seat_row: row,
          seat_column: column,
          is_booked: isBooked,
        });
      }

      simulatedSeats.push(seatRow);
    }
    return simulatedSeats;
  };

  // Handle seat click to send booking data via POST request
  const handleSeatClick = async (seat) => {
    try {
      const currentDate = new Date().toISOString(); // Get current date in ISO format

      const bookingData = {
        user_id: 1, // Hardcoded user_id
        show_id: 2, // Hardcoded show_id (you can change this dynamically if needed)
        booking_date: currentDate, // Current booking date
        seat_numbers: [seat.seat_number], // The selected seat number
      };

      // Make the POST request using Axios
      await axios.post("http://localhost:3000/bookings", bookingData);

      // After booking is successful, navigate to the bookings page
      navigate("/bookings", {
        state: { seat }, // Passing the selected seat as state
      });
    } catch (error) {
      console.error("Error booking the seat:", error);
    }
  };

  const renderSeatGrid = () => {
    const grid = generateSeats(); // Generate the seat grid

    return grid.map((seatRow, rowIndex) => (
      <div key={rowIndex} className="flex justify-center">
        {seatRow.map((seat) => {
          let seatType = seat.is_booked ? "booked" : "available";

          return (
            <button
              key={`${seat.seat_row}-${seat.seat_column}`}
              className={`w-12 h-12 m-1 rounded text-sm font-bold ${
                seatType === "booked"
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : seatType === "available"
                  ? "bg-green-500 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-600"
              }`}
              disabled={seatType === "booked"}
              onClick={() => {
                if (seatType === "available") {
                  handleSeatClick(seat); // Call the function to handle seat booking
                }
              }}
            >
              {seat.seat_number}
            </button>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Select Your Seat
      </h1>

      {/* 3D Curved Screen */}
      <div className="text-center mb-6 relative">
        <div className="bg-gradient-to-r from-gray-600 via-gray-800 to-black text-white text-lg p-4 rounded-xl transform perspective-500">
          <span className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-4xl transform rotate-3d-[30deg] translate-z-20">
            Screen
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="text-center mb-4">
          <p className="text-sm">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            Available
          </p>
          <p className="text-sm">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
            Booked
          </p>
          <p className="text-sm">
            <span className="inline-block w-4 h-4 bg-gray-300 rounded-full mr-2"></span>
            Empty Seat
          </p>
        </div>

        {/* Seat Grid */}
        <div className="space-y-4">{renderSeatGrid()}</div>
      </div>
    </div>
  );
};

export default Seats;
