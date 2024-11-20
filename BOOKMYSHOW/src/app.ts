import express from "express";
import usersRouter from "./routes/users";
import moviesRouter from "./routes/movies";
import theatersRouter from "./routes/theaters"
import screensRouter from "./routes/screens";
import showsRouter from "./routes/shows";
import ticketsRouter from "./routes/tickets";
import seatsRouter from "./routes/seats"
import seatReferencesRouter from "./routes/seatReferences";
import bookingRouter from "./routes/booking";
import transactionRouter from "./routes/transaction";
import paymentRouter from "./routes/payments"
import moviedetailsRouter from "./routes/moviedetails"

const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/theaters",theatersRouter);
app.use("/screens", screensRouter);
app.use("/shows", showsRouter);
app.use("/tickets", ticketsRouter);
app.use("/seats",seatsRouter);
app.use("/seatreferences",seatReferencesRouter);
app.use("/bookings",bookingRouter);
app.use("/transactions",transactionRouter);
app.use("/payments",paymentRouter)
app.use("/moviedetails",moviedetailsRouter)




export default app;
