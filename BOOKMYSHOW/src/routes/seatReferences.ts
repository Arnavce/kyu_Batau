import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new seat reference
router.post("/", async (req, res) => {
  const { theater_id, seat_type, description } = req.body;

  const response = await prisma.seatReference.create({
    data: {
      theater_id,
      seat_type,
      description,
    },
  });

  res.json({ msg: "Seat Reference added to the database", seatReference: response });
});

// Get all seat references
router.get("/", async (req, res) => {
  const all_seat_references = await prisma.seatReference.findMany();
  res.json(all_seat_references);
});

export default router;
