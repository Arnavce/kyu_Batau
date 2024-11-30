import { PrismaClient, Status, Method } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { booking_id, payment_date, payment_amount, payment_method, payment_status, transaction_id } = req.body;

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

router.get("/", async (req, res) => {
  const all_payments = await prisma.payment.findMany({
    include: {
      booking: true, 
    },
  });

  res.json(all_payments);
});

export default router;
