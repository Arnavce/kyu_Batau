import React, { useEffect, useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import axios from 'axios';

const TicketPage = () => {
  const [ticket, setTicket] = useState(null);
  const [show, setShow] = useState(null);
  const [screen, setScreen] = useState(null);
  const [movie, setMovie] = useState(null);
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        // Fetch tickets
        const ticketResponse = await axios.get('http://localhost:3000/tickets');
        if (ticketResponse.data && ticketResponse.data.length > 0) {
          const lastTicket = ticketResponse.data[ticketResponse.data.length - 1];
          setTicket(lastTicket);

          // Fetch show details
          const showResponse = await axios.get('http://localhost:3000/shows');
          const matchedShow = showResponse.data.find((s) => s.id === lastTicket.show_id);
          setShow(matchedShow);

          if (matchedShow) {
            // Fetch screen details
            const screenResponse = await axios.get('http://localhost:3000/screens');
            const matchedScreen = screenResponse.data.find((sc) => sc.id === matchedShow.screen_id);
            setScreen(matchedScreen);

            // Fetch movie details
            const movieResponse = await axios.get('http://localhost:3000/movies');
            const matchedMovie = movieResponse.data.find((m) => m.id === matchedShow.movie_id);
            setMovie(matchedMovie);
          }

          // Fetch booking details
          const bookingResponse = await axios.get('http://localhost:3000/bookings');
          const matchedBooking = bookingResponse.data.find((b) => b.id === lastTicket.booking_id);
          setBooking(matchedBooking);

          if (matchedBooking) {
            // Fetch user details
            const userResponse = await axios.get('http://localhost:3000/users');
            const matchedUser = userResponse.data.find((u) => u.id === matchedBooking.user_id);
            setUser(matchedUser);
          }
        } else {
          setError('No tickets available');
        }
      } catch (err) {
        setError('Failed to fetch ticket details');
        console.error('Error fetching ticket details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTicketDetails();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen flex justify-center items-center py-10">
        <p className="text-white text-2xl">Loading ticket details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen flex justify-center items-center py-10">
        <p className="text-white text-2xl">{error}</p>
      </div>
    );
  }

  if (!ticket || !show || !screen || !movie || !booking || !user) {
    return (
      <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen flex justify-center items-center py-10">
        <p className="text-white text-2xl">No ticket data available</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 min-h-screen flex justify-center items-center py-10">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Your Ticket</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Ticket #{ticket.id}</h2>
            <FaTicketAlt size={30} className="text-yellow-500" />
          </div>

          {/* Ticket Details */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-700">Seat: {ticket.seat_number}</p>
            <p className="text-lg font-semibold text-gray-700">Price: ₹{ticket.ticket_price}</p>
            <p className="text-lg text-gray-500">Issued on: {new Date(ticket.issue_date).toLocaleString()}</p>
          </div>

          {/* Show, Screen, and Movie Details */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-700">Show Time: {new Date(show.show_time).toLocaleString()}</p>
            <p className="text-lg font-semibold text-gray-700">Screen Type: {screen.screen_type}</p>
            <p className="text-lg font-semibold text-gray-700">Movie: {movie.title}</p>
            <p className="text-lg font-semibold text-gray-700">Genre: {movie.genre}</p>
          </div>

          {/* Booking and User Details */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-700">Booking User: {user.name}</p>
            <p className="text-lg font-semibold text-gray-700">Email: {user.email}</p>
            <p className="text-lg font-semibold text-gray-700">Phone: {user.phone_number}</p>
          </div>

          <div className="text-center">
            <button
              onClick={() => alert('Ticket Download Coming Soon!')}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
