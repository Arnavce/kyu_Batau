"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
// Create a new booking
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, show_id, booking_date, seat_numbers, transaction_id } = req.body;
    // Fetch the ticket prices based on the provided seat numbers
    const tickets = yield prisma.ticket.findMany({
        where: {
            seat_number: { in: seat_numbers }, // Assuming seat_numbers is an array of seat numbers
            show_id: show_id, // Ensure tickets belong to the correct show
        },
        select: { ticket_price: true }, // Only get the ticket price
    });
    // Calculate the total amount based on the ticket prices
    const total_amount = tickets.reduce((sum, ticket) => sum + ticket.ticket_price, 0);
    // Create the booking and associate tickets with it
    const response = yield prisma.booking.create({
        data: {
            user_id,
            show_id,
            booking_date,
            total_amount,
            status: client_1.Status.BOOKED, // Default status set to 'BOOKED'
        },
    });
    res.json({ msg: "Booking created successfully", booking: response });
}));
// Get all bookings
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_bookings = yield prisma.booking.findMany({
        include: {
            user: true,
            show: true,
            tickets: true, // Include tickets related to the booking
        },
    });
    res.json(all_bookings);
}));
exports.default = router;
