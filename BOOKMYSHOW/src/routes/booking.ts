import { PrismaClient, Status } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  const { user_id, show_id, booking_date, seat_numbers, transaction_id } = req.body;

  // Fetch the ticket prices based on the provided seat numbers
  const tickets = await prisma.ticket.findMany({
    where: {
      seat_number: { in: seat_numbers },  // Assuming seat_numbers is an array of seat numbers
      show_id: show_id,                    // Ensure tickets belong to the correct show
    },
    select: { ticket_price: true },  // Only get the ticket price
  });

  // Calculate the total amount based on the ticket prices
  const total_amount = tickets.reduce((sum, ticket) => sum + ticket.ticket_price, 0);

  // Create the booking and associate tickets with it
  const response = await prisma.booking.create({
    data: {
      user_id,
      show_id,
      booking_date,
      total_amount,
      status: Status.BOOKED,  // Default status set to 'BOOKED'
      transaction_id,
      },
    }
  );

  res.json({ msg: "Booking created successfully", booking: response });
});

// Get all bookings
router.get("/", async (req, res) => {
  const all_bookings = await prisma.booking.findMany({
    include: {
      user: true,
      show: true,
      tickets: true, // Include tickets related to the booking
    },
  });
  res.json(all_bookings);
});

export default router;
