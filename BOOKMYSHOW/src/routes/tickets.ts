import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new ticket
router.post("/", async (req, res, next) => {
  const { show_id, booking_id, seat_number, ticket_price } = req.body;

  const ticket = await prisma.ticket.create({
    data: {
      show_id,
      booking_id,
      seat_number,
      ticket_price,
      issue_date: new Date(),
    },
  });

  res.json({
    message: "Ticket created successfully",
    ticket,
  });
});


router.get("/", async (req, res) => {
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  });
  
  export default router;