import { PrismaClient, Rating } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// Movie Cast Routes
router.post("/cast", async (req, res) => {
  const { movie_id, actor_name, role } = req.body;

  const response = await prisma.movieCast.create({
    data: {
      movie_id,
      actor_name,
      role,
    },
  });

  res.json({ msg: "Movie cast added successfully", cast: response });
});

router.get("/cast", async (req, res) => {
  const all_casts = await prisma.movieCast.findMany({
    include: { movie: true }, // Include associated movie data
  });

  res.json(all_casts);
});

// Movie Crew Routes
router.post("/crew", async (req, res) => {
  const { movie_id, crew_member_name, role } = req.body;

  const response = await prisma.movieCrew.create({
    data: {
      movie_id,
      crew_member_name,
      role,
    },
  });

  res.json({ msg: "Movie crew added successfully", crew: response });
});

router.get("/crew", async (req, res) => {
  const all_crew = await prisma.movieCrew.findMany({
    include: { movie: true }, // Include associated movie data
  });

  res.json(all_crew);
});

// Movie Review Routes
router.post("/review", async (req, res) => {
  const { movie_id, user_id, review_text, rating } = req.body;

  const response = await prisma.movieReview.create({
    data: {
      movie_id,
      user_id,
      review_text,
      rating,
      review_date: new Date(),
    },
  });

  res.json({ msg: "Movie review added successfully", review: response });
});

router.get("/review", async (req, res) => {
  const all_reviews = await prisma.movieReview.findMany({
    include: {
      movie: true, // Include associated movie data
      user: true, // Include associated user data
    },
  });

  res.json(all_reviews);
});

export default router;
