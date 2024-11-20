import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Seats = () => {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch seats data from the backend
    const fetchSeats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/seats");
        setSeats(response.data);
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };

    fetchSeats();
  }, []);

  // Generate seat grid dynamically
  const totalRows = 5; // Example total rows (can be adjusted based on theater layout)
  const totalColumns = 10; // Example total columns
  const renderSeatGrid = () => {
    const grid = [];

    for (let row = 1; row <= totalRows; row++) {
      const seatRow = [];
      for (let column = 1; column <= totalColumns; column++) {
        const currentSeat = seats.find(
          (seat) => seat.seat_row === row && seat.seat_column === column
        );

        // Determine seat type
        let seatType = "empty";
        if (currentSeat) {
          seatType = currentSeat.is_booked ? "booked" : "available";
        }

        seatRow.push(
          <button
            key={`${row}-${column}`}
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
                // Navigate to /bookings with seat information as state
                navigate("/bookings", {
                  state: { seat: currentSeat },
                });
              }
            }}
          >
            {currentSeat?.seat_number || ""}
          </button>
        );
      }
      grid.push(
        <div key={row} className="flex justify-center">
          {seatRow}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Select Your Seat
      </h1>

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
