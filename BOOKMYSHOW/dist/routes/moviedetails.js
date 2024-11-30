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
// Movie Cast Routes
router.post("/cast", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movie_id, actor_name, role } = req.body;
    const response = yield prisma.movieCast.create({
        data: {
            movie_id,
            actor_name,
            role,
        },
    });
    res.json({ msg: "Movie cast added successfully", cast: response });
}));
router.get("/cast", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_casts = yield prisma.movieCast.findMany({
        include: { movie: true },
    });
    res.json(all_casts);
}));
// Movie Crew Routes
router.post("/crew", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movie_id, crew_member_name, role } = req.body;
    const response = yield prisma.movieCrew.create({
        data: {
            movie_id,
            crew_member_name,
            role,
        },
    });
    res.json({ msg: "Movie crew added successfully", crew: response });
}));
router.get("/crew", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_crew = yield prisma.movieCrew.findMany({
        include: { movie: true },
    });
    res.json(all_crew);
}));
// Movie Review Routes
router.post("/review", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movie_id, user_id, review_text, rating } = req.body;
    const response = yield prisma.movieReview.create({
        data: {
            movie_id,
            user_id,
            review_text,
            rating,
            review_date: new Date(),
        },
    });
    res.json({ msg: "Movie review added successfully", review: response });
}));
router.get("/review", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_reviews = yield prisma.movieReview.findMany({
        include: {
            movie: true,
            user: true,
        },
    });
    res.json(all_reviews);
}));
exports.default = router;
