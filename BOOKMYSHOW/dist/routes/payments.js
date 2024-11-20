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
// Create a new payment
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { booking_id, payment_date, payment_amount, payment_method, payment_status, transaction_id } = req.body;
    // Create a new payment record
    const response = yield prisma.payment.create({
        data: {
            booking_id,
            payment_date,
            payment_amount,
            payment_method,
            payment_status,
            transaction_id,
        }
    });
    res.json({ msg: "Payment created successfully", payment: response });
}));
// Get all payments
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_payments = yield prisma.payment.findMany({
        include: {
            booking: true, // Include associated booking data
        },
    });
    res.json(all_payments);
}));
exports.default = router;
