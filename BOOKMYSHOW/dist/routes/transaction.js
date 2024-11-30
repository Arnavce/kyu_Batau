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
// Create a new transaction
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, transaction_date, amount, status } = req.body;
    // Create a new transaction
    try {
        const response = yield prisma.transaction.create({
            data: {
                user_id, // User ID
                transaction_date, // Date of the transaction
                amount, // Transaction amount
                status, // Transaction status (enum)
            },
        });
        res.json({ msg: "Transaction created successfully", transaction: response });
    }
    catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ msg: "Error creating transaction" });
    }
}));
// Get all transactions
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_transactions = yield prisma.transaction.findMany({
        include: {
            user: true,
        },
    });
    res.json(all_transactions);
}));
exports.default = router;
