import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';

const TicketPage = () => {
  // Hardcoded ticket data based on the previous example
  const tickets = [
    {
      id: 1,
      show_id: 3,
      booking_id: 1,
      seat_number: 'A1',
      ticket_price: 250,
      issue_date: '2024-11-20T14:35:00.000Z',
      user: {
        name: 'Bat Man',
      },
      show: {
        movie: {
          title: 'Inception',
        },
      },
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-screen flex justify-center items-center py-10">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Your Tickets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{ticket.show.movie.title}</h2>
                <FaTicketAlt size={30} className="text-yellow-500" />
              </div>

              {/* User Name */}
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-gray-700">User: {ticket.user.name}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">Seat: {ticket.seat_number}</p>
                <p className="text-lg font-semibold text-gray-700">Price: ₹{ticket.ticket_price}</p>
                <p className="text-lg text-gray-500">Issued on: {new Date(ticket.issue_date).toLocaleString()}</p>
              </div>

              <div className="text-center">
                <button
                  // In this case, the button can redirect to a static URL or be removed entirely if not needed
                  onClick={() => alert('Saas Toh lene de ')}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
                >
                  Download Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
