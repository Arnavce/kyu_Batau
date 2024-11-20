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
// Route to create a new show
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { movie_id, screen_id, show_time, price, available_seats } = req.body;
    const shows = yield prisma.show.create({
        data: {
            movie_id,
            screen_id,
            show_time,
            price,
            available_seats,
        },
    });
    res.json({
        msg: "New show created successfully",
        shows,
    });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shows = yield prisma.show.findMany();
    res.json(shows);
}));
exports.default = router;
