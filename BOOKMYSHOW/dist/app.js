"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const movies_1 = __importDefault(require("./routes/movies"));
const theaters_1 = __importDefault(require("./routes/theaters"));
const screens_1 = __importDefault(require("./routes/screens"));
const shows_1 = __importDefault(require("./routes/shows"));
const tickets_1 = __importDefault(require("./routes/tickets"));
const seats_1 = __importDefault(require("./routes/seats"));
const seatReferences_1 = __importDefault(require("./routes/seatReferences"));
const booking_1 = __importDefault(require("./routes/booking"));
const transaction_1 = __importDefault(require("./routes/transaction"));
const payments_1 = __importDefault(require("./routes/payments"));
const moviedetails_1 = __importDefault(require("./routes/moviedetails"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
// Register routes
app.use("/users", users_1.default);
app.use("/movies", movies_1.default);
app.use("/theaters", theaters_1.default);
app.use("/screens", screens_1.default);
app.use("/shows", shows_1.default);
app.use("/tickets", tickets_1.default);
app.use("/seats", seats_1.default);
app.use("/seatreferences", seatReferences_1.default);
app.use("/bookings", booking_1.default);
app.use("/transactions", transaction_1.default);
app.use("/payments", payments_1.default);
app.use("/moviedetails", moviedetails_1.default);
exports.default = app;