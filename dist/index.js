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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(username, phone_number, password_hash, location, gender, email, dob) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.users.create({
            data: {
                username,
                password_hash,
                phone_number,
                location,
                email,
                gender,
                dob
            }
        });
        console.log(response);
    });
}
createUser("Spiderrman", "93847562538", "hashedshhhh", "delhiuniversity", "MALE", "rishabhspoder@gmail.com", new Date("2005-01-01"));
createUser("Mrdetective", "9384799253", "hashedshhhh2", "delhiuniversity", "MALE", "shadow@gmail.com", new Date("1303-12-05") // Correctly creates a Date object
);
