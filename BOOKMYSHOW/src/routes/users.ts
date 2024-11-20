import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    username,
    password_hash,
    phone_number,
    location,
    email,
    gender,
    dob,
  } = req.body;
  const response = await prisma.user.create({
    data: {
      username,
      password_hash,
      phone_number,
      location,
      email,
      gender,
      dob,
    },
  });
  console.log(response);
  res.json({ msg: "User added to the database", user: response });
});

router.get("/", async (req, res) => {
  const all_users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      phone_number: true,
      location: true,
      email: true,
      gender: true,
      dob: true,
    },
  });
  res.json(all_users);
});

export default router;
