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
    const { username, password_hash, phone_number, location, email, gender, dob, } = req.body;
    const response = yield prisma.user.create({
        data: {
            username,
            password_hash,
            phone_number,
            location,
            email,
            gender,
            dob,
        },
    });
    console.log(response);
    res.json({ msg: "User added to the database", user: response });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all_users = yield prisma.user.findMany({
        select: {
            id: true,
            username: true,
            phone_number: true,
            location: true,
            email: true,
            gender: true,
            dob: true,
        },
    });
    res.json(all_users);
}));
exports.default = router;
