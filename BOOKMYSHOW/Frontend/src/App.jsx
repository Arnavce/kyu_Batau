import React from "react";
import { Movies } from "../pages/Movies";
import Details from "../pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Theaters } from "../pages/Theaters";
import ScreenDisplay from "../pages/Screens";
import SeatReferences from "../pages/References";
import { Shows } from "../pages/Shows";
import Seats from "../pages/Seats";
import { Bookings } from "../pages/Bookings";  // Ensure correct import
import PaymentScreen from "../pages/Transactions.jsx";
import TicketPage from "../pages/Tickets.jsx";
import LoginPage from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import SignupPage from "../pages/Signup.jsx";
import UserBookings from "../pages/UserBookings"; // Import the new component


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviedetails/:id" element={<Details />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/screens" element={<ScreenDisplay />} />
          <Route path="/seatreferences" element={<SeatReferences />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/bookings" element={<Bookings />} /> {/* Corrected this line */}
          <Route path="/transactions" element={<PaymentScreen />} /> {/* Corrected this line */}
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/" element={<Home />} />
          <Route path="/userbookings/:userId" element={<UserBookings />} /> {/* New route for user bookings */}

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
