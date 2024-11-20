import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Route to create a new theater
router.post("/", async (req, res) => {
  const { name, location, total_screens } = req.body;

  try {
    const theater = await prisma.theater.create({
      data: {
        name,
        location,
        total_screens,
      },
    });
    
    res.json({
      msg: "Theater added to the database",
      theater,
    });
  } catch (error) {
    console.error("Error creating theater:", error);
    res.status(500).json({ error: "An error occurred while adding the theater." });
  }
});

// Route to get all theaters
router.get("/", async (req, res) => {
  try {
    const theaters = await prisma.theater.findMany();
    res.json(theaters);
  } catch (error) {
    console.error("Error retrieving theaters:", error);
    res.status(500).json({ error: "An error occurred while fetching theaters." });
  }
});

export default router;
