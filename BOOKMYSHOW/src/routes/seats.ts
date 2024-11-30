import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    show_id,
    seat_number,
    is_booked,
    seat_row,
    seat_column,
    preference_id,
    preference_score,
  } = req.body;

  const response = await prisma.seat.create({
    data: {
      show_id,
      seat_number,
      is_booked,
      seat_row,
      seat_column,
      preference_id,
      preference_score,
    },
  });

  res.json({ msg: "Seat added to the database", seat: response });
});

router.get("/", async (req, res) => {
  const all_seats = await prisma.seat.findMany();
  res.json(all_seats);
});

export default router;
