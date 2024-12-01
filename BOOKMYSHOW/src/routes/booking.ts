import { PrismaClient, Status } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { user_id, show_id, booking_date, seat_numbers, transaction_id } = req.body;

  const tickets = await prisma.ticket.findMany({
    where: {
      seat_number: { in: seat_numbers }, 
      show_id: show_id,                  
    },
    select: { ticket_price: true },  
  });

  const total_amount = tickets.reduce((sum, ticket) => sum + ticket.ticket_price, 0);

  const response = await prisma.booking.create({
    data: {
      user_id,
      show_id,
      booking_date,
      total_amount,
      status: Status.BOOKED, 
     
      },
    }
  );

  res.json({ msg: "Booking created successfully", booking: response });
});

router.get("/", async (req, res) => {
    const { user_id } = req.query;
    const all_bookings = await prisma.booking.findMany({
        where: {
            user_id: user_id ? Number(user_id) : undefined,
        },
        include: {
            user: true,
            show: true,
            tickets: true,
        },
    });
    res.json(all_bookings);
});

export default router;
