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
// Create a new ticket
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { show_id, booking_id, seat_number, ticket_price } = req.body;
    const ticket = yield prisma.ticket.create({
        data: {
            show_id,
            booking_id,
            seat_number,
            ticket_price,
            issue_date: new Date(),
        },
    });
    res.json({
        message: "Ticket created successfully",
        ticket,
    });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield prisma.ticket.findMany();
    res.json(tickets);
}));
exports.default = router;
