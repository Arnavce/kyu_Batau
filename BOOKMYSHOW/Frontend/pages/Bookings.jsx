import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

export const Bookings = () => {
  const [bookingData, setBookingData] = useState(null);
  const [showData, setShowData] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [screenData, setScreenData] = useState(null);
  const navigate = useNavigate();

  // Fetch data function
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingResponse = await fetch("http://localhost:3000/bookings");
        const bookingData = await bookingResponse.json();

        if (bookingData && bookingData.length > 0) {
          const booking = bookingData[bookingData.length - 1]; // Assuming we are fetching the last booking
          setBookingData(booking);

          // Fetch associated show data
          const showResponse = await fetch("http://localhost:3000/shows");
          const shows = await showResponse.json();
          const show = shows.find(show => show.id === booking.show_id);
          setShowData(show);

          // Fetch associated movie data
          const movieResponse = await fetch("http://localhost:3000/movies");
          const movies = await movieResponse.json();
          const movie = movies.find(movie => movie.id === show.movie_id);
          setMovieData(movie);

          // Fetch associated screen data
          const screenResponse = await fetch("http://localhost:3000/screens");
          const screens = await screenResponse.json();
          const screen = screens.find(screen => screen.id === show.screen_id);
          setScreenData(screen);
        } else {
          console.error("No booking data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingData();
  }, []);

  // Handle the "Make Payment" button click
  const handleMakePaymentClick = async () => {
    // Extract the required data for the new ticket
    const ticketData = {
      show_id: showData.id,
      booking_id: bookingData.id,
      seat_number: 'A1', // Assuming seat is 'A1', but this can be dynamically set based on user selection
      ticket_price: showData.price, // Use the price from the show data or another calculation
    };

    try {
      // Send the POST request to create the ticket
      const response = await axios.post('http://localhost:3000/tickets', ticketData);
      console.log('Ticket created successfully:', response.data);

      // Optionally, redirect to another page (e.g., transaction success page)
      navigate('/transactions');
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  if (!bookingData || !showData || !movieData || !screenData) {
    return (
      <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen py-10 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4">
          <p className="text-center text-gray-800">Loading booking details...</p>
        </div>
      </div>
    );
  }

  const pricePerTicket = showData.price;
  const tax = 0.18; // 18% tax
  const totalAmount = pricePerTicket + (pricePerTicket * tax); // Price + Tax

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen py-10 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Booking Details</h1>

        <div className="text-gray-700">
          <p><strong>User:</strong> {bookingData.user.username}</p>
          <p><strong>Email:</strong> {bookingData.user.email}</p>
          <p><strong>Phone:</strong> {bookingData.user.phone_number}</p>
          <p><strong>Location:</strong> {bookingData.user.location}</p>

          <hr className="my-4" />

          <p><strong>Show:</strong> {movieData.title}</p>
          <p><strong>Movie Genre:</strong> {movieData.genre}</p>
          <p><strong>Show Time:</strong> {new Date(showData.show_time).toLocaleString()}</p>
          <p><strong>Screen Type:</strong> {screenData.screen_type}</p>
          <p><strong>Price per Ticket:</strong> ₹{pricePerTicket}</p>
          <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
          <p><strong>Status:</strong> {bookingData.status}</p>
          <p><strong>Booking Date:</strong> {new Date(bookingData.booking_date).toLocaleString()}</p>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleMakePaymentClick}
            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          >
            Click to Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};
