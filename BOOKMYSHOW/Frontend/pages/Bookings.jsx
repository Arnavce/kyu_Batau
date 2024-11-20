import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Bookings = () => {
  // Get the current date and time in ISO format
  const currentDate = new Date().toISOString();

  // Hardcoded data for a booking for the movie "Inception"
  const bookingData = {
    id: 1,
    user_id: 101,
    user: {
      id: 101,
      name: 'Bat Man ',
      email: 'Rishabh@example.com',
    },
    show_id: 3, // Example Show ID for Inception
    show: {
      id: 3,
      movie_id: 1,
      screen_id: 2,
      show_time: "2024-11-21T10:00:00.000Z",
      price: 250,
      available_seats: 150,
      movie: {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        director: "Christopher Nolan",
      },
    },
    booking_date: currentDate, // Set booking date to current date and time
    total_amount: 389, // Assume the user booked 2 tickets
    status: "Confirmed",
    transaction_id: "tx12345", // Example transaction ID
    transaction: {
      id: "tx12345",
      transaction_date: currentDate, // Set transaction date to current date and time
      amount: 489,
      status: "Completed",
    },
    tickets: [
      {
        id: 1,
        seat_number: "A1",
        ticket_price: 250,
        issue_date: currentDate, // Set issue date to current date and time
      }
    ],
  };

  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/transactions');
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-10 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Booking Details</h1>

        <div className="text-gray-700">
          <p><strong>User:</strong> {bookingData.user.name}</p>
          <p><strong>Email:</strong> {bookingData.user.email}</p>
          <p><strong>Show:</strong> {bookingData.show.movie.title}</p>
          <p><strong>Show Time:</strong> {new Date(bookingData.show.show_time).toLocaleString()}</p>
          <p><strong>Price per Ticket:</strong> ₹{bookingData.show.price}</p>
          <p><strong>Total Amount:</strong> ₹{bookingData.total_amount}</p>
          <p><strong>Status:</strong> {bookingData.status}</p>
          <p><strong>Booking Date:</strong> {new Date(bookingData.booking_date).toLocaleString()}</p>
          <h3 className="text-xl font-semibold mt-4">Tickets:</h3>
          {bookingData.tickets.map((ticket, index) => (
            <div key={index} className="mt-2">
              <p><strong>Seat:</strong> {ticket.seat_number}</p>
              <p><strong>Issued On:</strong> {new Date(ticket.issue_date).toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleProceedClick}
            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          >
            Click to Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};
