import { PrismaClient, Status } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new transaction
router.post("/", async (req, res) => {
  const { transaction_date, amount, status, booking_ids } = req.body;

  // Create a new transaction
  const response = await prisma.transaction.create({
    data: {
      transaction_date,
      amount,
      status,
      bookings: {
        connect: booking_ids.map((id: number) => ({ id })) // Connect bookings by their IDs
      }
    }
  });

  res.json({ msg: "Transaction created successfully", transaction: response });
});

// Get all transactions
router.get("/", async (req, res) => {
  const all_transactions = await prisma.transaction.findMany({
    include: {
      bookings: true,  // Include associated bookings
    },
  });

  res.json(all_transactions);
});

export default router;
