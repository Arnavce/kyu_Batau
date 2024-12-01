import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserBookings = () => {
    const { userId } = useParams(); // Get userId from URL parameters
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchUserBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/bookings?user_id=${userId}`);
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching user bookings:", error);
            }
        };

        fetchUserBookings();
    }, [userId]);

    return (
        <div>
            <h1>User Bookings</h1>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.id}>
                            <p>Show ID: {booking.show_id}</p>
                            <p>Booking Date: {new Date(booking.booking_date).toLocaleString()}</p>
                            <p>Seat Numbers: {booking.seat_numbers.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found for this user.</p>
            )}
        </div>
    );
};

export default UserBookings; 