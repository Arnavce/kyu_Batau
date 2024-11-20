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
    const { title, description, duration, release_date, language, genre, imdb_rating, trailer_link, } = req.body;
    const response = yield prisma.movie.create({
        data: {
            title,
            description,
            duration,
            release_date,
            language,
            genre,
            imdb_rating,
            trailer_link,
        },
    });
    res.json({ msg: "Movie added to the database", movie: response });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_movies = yield prisma.movie.findMany();
    res.json(all_movies);
}));
exports.default = router;
