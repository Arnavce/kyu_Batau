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

router.get("/:movie_id", async (req, res) => {
  const movieId = parseInt(req.params.movie_id); // Get the movie ID from the request parameters and convert to integer
  try {
      const movie = await prisma.movie.findUnique({
          where: { id: movieId }, // Fetch the movie by ID
      });
      if (movie) {
          res.json(movie); // Send the movie data as a response
      } else {
          res.status(404).json({ msg: "Movie not found" }); // Handle case where movie is not found
      }
  } catch (error) {
      res.status(500).json({ msg: "Error fetching movie", error }); // Handle any errors
  }
});

export default router;
