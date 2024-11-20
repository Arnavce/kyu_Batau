import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Route to create a new show
router.post("/", async (req, res, next) => {
  const { movie_id, screen_id, show_time, price, available_seats } = req.body;

  const shows = await prisma.show.create({
    data: {
      movie_id,
      screen_id,
      show_time,
      price,
      available_seats,
    },
  });

  res.json({
    msg: "New show created successfully",
    shows,
  });
});

router.get("/",async (req,res)=>{
    const shows = await prisma.show.findMany()
    res.json(shows)
})

export default router;