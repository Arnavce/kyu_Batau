import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBitcoin, FaCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons

const PaymentScreen = () => {
  const [message, setMessage] = useState('Connecting to your crypto wallet...');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Step-by-step message update
  useEffect(() => {
    const timer = setTimeout(() => setMessage('Making payment... in progress'), 2000); // Display after 2 seconds
    const timer2 = setTimeout(() => setMessage('SUCCESS! Download your tickets and enjoy the show'), 4000); // Display after 4 seconds

    // Redirect after 6 seconds
    const redirectTimer = setTimeout(() => {
      setIsLoading(false);  // Hide the loading animation
    }, 6000);

    // Cleanup timers
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(redirectTimer);
    };
  }, []);

  // Handle redirection to tickets page
  const handleGetTickets = () => {
    navigate('/tickets'); // Redirect to tickets page
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 min-h-screen flex justify-center items-center py-6">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4 text-center">
        {isLoading ? (
          <>
            <div className="text-2xl font-bold text-gray-800 mb-4">
              <div className="animate-pulse">{message}</div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-10 h-8 border-4 border-t-4 border-white rounded-full animate-spin"></div>
            </div>
            <div className="mt-4 text-xl text-gray-500">
              <FaBitcoin className="animate-pulse text-yellow-400" size={30} />
            </div>
          </>
        ) : (
          <div className="text-xl font-bold text-gray-800">
            <FaCheckCircle className="text-green-500 mb-2" size={40} />
            {message}
          </div>
        )}

        {/* "Get Tickets" button */}
        {!isLoading && (
          <button
            onClick={handleGetTickets}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Get Tickets
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;
