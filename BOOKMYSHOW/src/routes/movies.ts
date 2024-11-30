import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    title,
    movie_poster,
    description,
    duration,
    release_date,
    language,
    genre,
    imdb_rating,
    trailer_link,
  } = req.body;
  const response = await prisma.movie.create({
    data: {
      title,
      movie_poster,
      description,
      duration,
      release_date,
      language,
      genre,
      imdb_rating,
      trailer_link,
    },
  });
  res.json({ msg: "Movie added to the database", movie: response });
});

router.get("/", async (req, res) => {
  const all_movies = await prisma.movie.findMany();
  res.json(all_movies);
});

export default router;
