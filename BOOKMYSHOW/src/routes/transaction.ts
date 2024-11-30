import { PrismaClient, Status } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { user_id, transaction_date, amount, status } = req.body;

  try {
    const response = await prisma.transaction.create({
      data: {
        user_id,              
        transaction_date,      
        amount,                
        status,               
      },
    });

    res.json({ msg: "Transaction created successfully", transaction: response });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ msg: "Error creating transaction" });
  }
});

router.get("/", async (req, res) => {
  const all_transactions = await prisma.transaction.findMany({
    include: {
      user: true,          
        },
  });

  res.json(all_transactions);
});

export default router;
