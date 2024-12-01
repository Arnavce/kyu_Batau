import express from "express";
import bookingRouter from "./routes/booking";
import moviedetailsRouter from "./routes/moviedetails";
import moviesRouter from "./routes/movies";
import paymentRouter from "./routes/payments";
import screensRouter from "./routes/screens";
import seatReferencesRouter from "./routes/seatReferences";
import seatsRouter from "./routes/seats";
import showsRouter from "./routes/shows";
import theatersRouter from "./routes/theaters";
import ticketsRouter from "./routes/tickets";
import transactionRouter from "./routes/transaction";
import usersRouter from "./routes/users";

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
app.use("/payments",paymentRouter);
app.use("/moviedetails",moviedetailsRouter);




export default app;
