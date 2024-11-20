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
// Create a new seat
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { show_id, seat_number, is_booked, seat_row, seat_column, preference_id, preference_score, } = req.body;
    const response = yield prisma.seat.create({
        data: {
            show_id,
            seat_number,
            is_booked,
            seat_row,
            seat_column,
            preference_id,
            preference_score,
        },
    });
    res.json({ msg: "Seat added to the database", seat: response });
}));
// Get all seats
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_seats = yield prisma.seat.findMany();
    res.json(all_seats);
}));
exports.default = router;
