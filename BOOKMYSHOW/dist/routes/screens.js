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
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { theater_id, screen_type, total_seats } = req.body;
    try {
        const screen = yield prisma.screen.create({
            data: {
                theater_id,
                screen_type,
                total_seats,
            },
        });
        res.json({
            msg: "Screen added to the theater",
            screen,
        });
    }
    catch (error) {
        console.error("Error creating screen:", error);
        res
            .status(500)
            .json({ error: "An error occurred while adding the screen." });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const screens = yield prisma.screen.findMany({
            select: {
                id: true,
                screen_type: true,
                total_seats: true,
            },
        });
        res.json(screens);
    }
    catch (error) {
        console.error("Error retrieving screens:", error);
        res.status(500).json({ error: "An error occurred while fetching screens." });
    }
}));
exports.default = router;
