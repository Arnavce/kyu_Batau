import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { theater_id, screen_type, total_seats } = req.body;

  try {
    const screen = await prisma.screen.create({
      data: {
        theater_id,
        screen_type,
        total_seats,
      },
    });

    res.json({
      msg: "Screen added to the theater",
      screen,
    });
  } catch (error) {
    console.error("Error creating screen:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the screen." });
  }
});

router.get("/", async (req , res) => {
  try {
    const screens = await prisma.screen.findMany({
      select: {
        id: true,
        screen_type: true,
        total_seats: true, 
      },
    });
    res.json(screens);
  } catch (error) {
    console.error("Error retrieving screens:", error);
    res.status(500).json({ error: "An error occurred while fetching screens." });
  }
});

export default router;
