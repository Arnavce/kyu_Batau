import { PrismaClient, Status, Method } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new payment
router.post("/", async (req, res) => {
  const { booking_id, payment_date, payment_amount, payment_method, payment_status, transaction_id } = req.body;

  // Create a new payment record
  const response = await prisma.payment.create({
    data: {
      booking_id,
      payment_date,
      payment_amount,
      payment_method,
      payment_status,
      transaction_id,
    }
  });

  res.json({ msg: "Payment created successfully", payment: response });
});

// Get all payments
router.get("/", async (req, res) => {
  const all_payments = await prisma.payment.findMany({
    include: {
      booking: true,  // Include associated booking data
    },
  });

  res.json(all_payments);
});

export default router;
